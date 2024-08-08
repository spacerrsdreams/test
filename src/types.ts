import { User } from "@prisma/client";
import { Request } from "express";

export type AuthenticatedRequest = Request & {
  user?: User;
};
