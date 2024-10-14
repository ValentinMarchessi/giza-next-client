import * as yup from "yup";

export const logInSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export type LogInSchema = yup.InferType<typeof logInSchema>;
