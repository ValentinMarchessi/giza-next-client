"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { LogInSchema, logInSchema } from "../../../schemas";

export default function LogInForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LogInSchema>({ resolver: yupResolver(logInSchema) });

  return (
    <form
      className="container max-w-max mx-auto flex flex-col justify-center items-center gap-4 p-12"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email")} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input type="password" {...register("password")} />
      </div>
      <button className="max-w-max mt-8" type="submit">
        Log In
      </button>
      <Link href="/onboarding">Sign Up</Link>
      <p className="text-danger-350">{errors.root?.message}</p>
    </form>
  );
}
