import type { NextApiRequest, NextApiResponse } from "next";
import { csrfCreate } from "@/utils/csrf";

const handler = async (_req: NextApiRequest, res: NextApiResponse) =>
  res.status(200).json({ token: csrfCreate(process.env.CSRF_SECRET || "") });

export default handler;
