import { isEmpty } from "lodash-es";
import type { NextApiRequest, NextApiResponse } from "next";
import { OrderEntity, ProductEntity, UnregisteredUserEntity } from "@/api/generated/graphql";
import { validateEmail } from "@/src/helpers/utils";
import { csrfVerify } from "@/utils/csrf";

async function checkedFetch(url: string, init?: RequestInit): Promise<Response> {
  const res = await fetch(url, init);
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Strapi ${init?.method ?? "GET"} ${url} responded ${res.status}: ${body}`);
  }
  return res;
}

const addUnregisteredUser = async (
  email: string,
  name: string,
  lastName: string,
  postalCode: number,
  city: string,
  address: string,
  phone: number,
  company?: string,
  companyId?: string
) =>
  await checkedFetch(`${process.env.STRAPI_URL!}/unregistered-users`, {
    body: JSON.stringify({
      data: {
        Address: address,
        City: city,
        Email: email,
        Last_name: lastName,
        Name: name,
        Phone: phone,
        Postal_code: postalCode,
        ...(company ? { Company_name: company } : {}),
        ...(companyId ? { Company_id: companyId } : {}),
      },
    }),
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN ?? ""}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

const addOrder = async (
  products: Array<number>,
  quantity: number,
  userId?: number,
  unregistered_userId?: Array<number>
) =>
  await checkedFetch(`${process.env.STRAPI_URL!}/orders`, {
    body: JSON.stringify({
      data: {
        products,
        quantity,
        unregistered_user: unregistered_userId ?? null,
        user: userId ?? null,
      },
    }),
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN ?? ""}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

const getProduct = async (productId: number) =>
  await checkedFetch(`${process.env.STRAPI_URL!}/products/${productId}`);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: `${req.method} not allowed` });
    return;
  }

  const token = `xsrf-token` in req.headers ? (req.headers[`xsrf-token`] as string) : "";

  const isValid = csrfVerify(process.env.CSRF_SECRET || "", token);

  if (!isValid) {
    res.status(403).json({ error: "Unauthorized" });
  } else {
    // eslint-disable-next-line no-unused-vars
    const { name, lastName, email, companyCode, company, postalCode, city, address, phone, products } = JSON.parse(
      req.body
    );

    if (!validateEmail(email)) {
      res.status(400).send("Invalid email");
      return;
    }

    if (!name) {
      res.status(400).send("Invalid name");
      return;
    }

    if (!lastName) {
      res.status(400).send("Invalid last name");
      return;
    }

    if (!phone) {
      res.status(400).send("Invalid phone number");
      return;
    }

    if (!postalCode) {
      res.status(400).send("Invalid postal code");
      return;
    }

    if (!city) {
      res.status(400).send("Invalid city");
      return;
    }

    if (!address) {
      res.status(400).send("Invalid address");
      return;
    }

    if (!products || isEmpty(products)) {
      res.status(400).send("Invalid product count");
      return;
    }

    try {
      const orderCandidates = products as Array<{
        id: number;
        quantity: number;
      }>;

      // check if requested quantity is not higher than stock
      for await (const orderProduct of orderCandidates.map(({ id }) => getProduct(id))) {
        const parsedOrderProduct: { data: ProductEntity } = await orderProduct.json();

        const requestedQuantity = orderCandidates.find(
          ({ id }) => id.toString() === parsedOrderProduct.data.id?.toString()
        )?.quantity;

        if (!requestedQuantity) {
          res.status(400).send("Invalid product id");
          return;
        }

        if (
          parsedOrderProduct.data.attributes?.Quantity &&
          requestedQuantity! > parsedOrderProduct.data.attributes?.Quantity
        ) {
          res.status(400).send("Invalid quantity");
          return;
        }
      }

      const unregisteredUser = await addUnregisteredUser(
        email,
        name,
        lastName,
        postalCode,
        city,
        address,
        phone,
        company,
        companyCode
      );
      const parsedUnregisteredUser: { data: UnregisteredUserEntity } = await unregisteredUser.json();
      const quantity = orderCandidates.reduce((acc, { quantity }) => acc + (quantity ?? 0), 0);

      const order = await addOrder(
        products,
        quantity,
        undefined,
        parsedUnregisteredUser.data.id ? [parseInt(parsedUnregisteredUser.data.id, 10)] : undefined
      );

      const parsedOrder: { data: OrderEntity } = await order.json();

      res.status(201).json({
        id: parsedOrder.data.attributes?.Kompservisas_id,
        order_description: parsedOrder.data.attributes?.Order_description,
        state: parsedOrder.data.attributes?.State,
        uuid: parsedOrder.data.attributes?.UID,
      });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }
};

export default handler;
