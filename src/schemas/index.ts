import { Role } from "@/types/enums";
import * as yup from "yup";

export const signUpSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  role: yup.string().oneOf([Role.Candidate, Role.Company]),
});

export type SignUpSchema = yup.InferType<typeof signUpSchema>;

export const logInSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export type LogInSchema = yup.InferType<typeof logInSchema>;
