/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  Paper,
  Radio,
  RadioGroup,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import FormInputText from "@/src/components/elements/FormInputText";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import KrepselisSummary from "@/src/pages/Krepselis/KrepselisSummary";
import { useCart } from "react-use-cart";
import { Order } from "@/src/helpers/types";
import { useRouter } from "next/router";
import { red } from "@mui/material/colors";
import flexContainer from "@/src/mixins/flexContainer";

const StyledOrderForm = styled("form")({
  boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  display: "flex",
  flexDirection: "column",
});

const StyledFieldsRowContainer = styled("div")(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
  padding: theme.spacing(6),
}));

const validationSchema = yup
  .object({
    address: yup.string().required("gatvė, namo numeris yra privalomas laukas"),
    csrfToken: yup.string(),
    city: yup.string().required("miestas yra privalomas laukas"),
    company: yup.string(),
    companyCode: yup.string(),
    email: yup.string().required("el. paštas yra privalomas laukas").email("neteisingas el. pašto formatas"),
    lastName: yup.string().required("pavardė yra privalomas laukas"),
    name: yup.string().required("vardas yra privalomas laukas"),
    phone: yup.number().required("telefono numeris yra privalomas laukas"),
    postalCode: yup
      .string()
      .matches(/^[1-9]\d*$/, "pašto kodą turi sudaryti 5 skaitmenys")
      .required("pašto kodas yra privalomas laukas ")
      .min(5, "pašto kodą turi sudaryti 5 skaitmenys")
      .max(5, "pašto kodą turi sudaryti 5 skaitmenys"),
    // shipping: yup.string(),
  })
  .required();

const radioOptions = [
  { label: "Siųsti nordytu adresu", value: "ship" },
  { label: "Atsiėmimas parduotuvėje Algirdo g. 32 / Šaltinių g. 2, Vilnius", value: "no-ship" },
];

const getCSRFToken: () => Promise<string | undefined> = async () => {
  try {
    const response = await fetch("/api/csrf");
    const json: { token: string } | undefined = await response.json();
    return json?.token;
  } catch (error) {
    //TODO: handle error
    console.log(error);
  }
};

const OutOfStockError: React.FC = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        background: red.A200,
        border: `2px solid ${red.A400}`,
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: theme.spacing(2),
      }}
    >
      <Typography fontSize={16}>
        <strong>Klaida</strong>
      </Typography>
      <Typography>
        {/* Produktų kiekis viršija kiekį sandelyje. */}
        Jeigu matote šią klaidą, prašome informuoti mus el paštu{" "}
        <a href="mailto:info@kompservisas.lt">info@kompservisas.lt</a>.
      </Typography>
    </Paper>
  );
};

const AtsiemimasBox = styled("div")({
  ...flexContainer("space-between"),
  flexWrap: "wrap",
});

const KrepselisOrderForm: React.FC = () => {
  const router = useRouter();
  const { items } = useCart();
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [radioValue, setRadioValue] = React.useState(radioOptions[0].value);

  const methods = useForm({
    defaultValues: { csrfToken: "" },
    resolver: yupResolver(validationSchema),
  });

  const {
    // eslint-disable-next-line no-unused-vars
    formState: { errors, touchedFields },
    watch,
    setValue,
    handleSubmit,
  } = methods;

  const csrf = watch("csrfToken", "");

  const onSubmit = async (data: FieldValues) => {
    const { csrfToken: csrfFromForm, ...formFields } = data as FieldValues & { csrfToken?: string };
    const order: Order = {
      ...formFields,
      products: items.map(({ id, quantity }) => ({ id: parseInt(id, 10), quantity: quantity ?? 1 })),
    };

    setLoading(true);

    try {
      const response = await fetch("/api/order", {
        body: JSON.stringify(order),
        headers: {
          "XSRF-TOKEN": csrfFromForm ?? "",
        },
        method: "POST",
      });

      if (response.ok) {
        const orderInformation = await response.json();
        if (orderInformation.uuid) {
          setLoading(false);
          return router.push(`/uzsakymas/${orderInformation.uuid}`);
        }
      }
      throw new Error("Užsakymas nepavyko");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setFetchError(true);
    }
  };

  React.useEffect(() => {
    getCSRFToken()
      .then((token) => setValue("csrfToken", token ?? ""))
      .catch((error) => console.log(error));
  }, [setValue]);

  return (
    <div>
      <FormProvider {...methods}>
        <StyledOrderForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFieldsRowContainer>
            <div>
              <Typography fontSize={20}>Vartotojo informacija</Typography>
            </div>
            <FormInputText name="name" label="Vardas" required focus />
            <FormInputText name="lastName" label="Pavardė" required />
            <FormInputText name="email" label="El. paštas" required />
            <FormInputText name="phone" label="Telefono numeris be +370 (tik skaičiai)" required />
            <FormInputText name="postalCode" label="Pašto kodas" required />
            <FormInputText name="city" label="Miestas" required />
            <FormInputText name="address" label="Gatvė, namo numeris" required />
            <FormInputText name="company" label="Įmonė" />
            <FormInputText name="companyCode" label="Įmonės kodas" />
            {/* TODO when I get the information on shipping price */}
            {/* <FormControl>
              <Typography fontSize={20}>Atsiėmimas</Typography>
              <FormLabel id="controlled-radio-buttons-group" sx={{ display: "none" }}>
                Atsiėmimas
              </FormLabel>
              <RadioGroup
                {...register("shipping")}
                aria-labelledby="controlled-radio-buttons-group"
                name={"shipping"}
                value={radioValue}
                onChange={(e) => {
                  setRadioValue((e.target as HTMLInputElement).value);
                  setValue("shipping", (e.target as HTMLInputElement).value);
                }}
              >
                {radioOptions.map(({ value, label }) => (
                  <FormControlLabel key={label} value={value} control={<Radio />} label={label} />
                ))}
              </RadioGroup>
            </FormControl> */}
            <AtsiemimasBox>
              <Typography fontSize={20}>Atsiėmimas</Typography>
              <Typography>Algirdo g. 32 / Šaltinių g. 2, Vilnius</Typography>
            </AtsiemimasBox>
            <input type="hidden" name="csrfToken" value={csrf} />
          </StyledFieldsRowContainer>
          <StyledFieldsRowContainer sx={{ borderBottom: "unset" }}>
            <KrepselisSummary />
            {!loading ? (
              <Button type="submit" variant="contained" disableElevation disabled={fetchError}>
                Užsakyti
              </Button>
            ) : (
              <Box sx={{ width: "100%" }}>
                <Typography fontSize={20}>Apdorojama</Typography>
                <LinearProgress />
              </Box>
            )}

            {fetchError && <OutOfStockError />}
          </StyledFieldsRowContainer>
        </StyledOrderForm>
      </FormProvider>
    </div>
  );
};

export default KrepselisOrderForm;
