"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { LogInSchema, logInSchema } from "../../../schemas";
import Input from "@/components/Input";

export default function LogInForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LogInSchema>({ resolver: yupResolver(logInSchema) });

  return (
    <form
      className="container max-w-max mx-auto flex flex-col justify-center items-center gap-4 p-12 bg-neutral-100 dark:bg-neutral-950 rounded-lg"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Input label="Email" type="email" {...register("email")} />
      <Input label="Password" type="password" {...register("password")} />
      <div className="flex flex-col gap-2">
        <button className="btn-primary w-full" type="submit">
          Log In
        </button>
        <Link href="/onboarding">
          <button className="btn-secondary w-full">Sign Up</button>
        </Link>
      </div>
      <p className="text-danger-350">{errors.root?.message}</p>
    </form>
  );
}
