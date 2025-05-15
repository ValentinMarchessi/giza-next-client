"use client";

import { useMemo } from "react";
import { SignUpSchema, signUpSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useCarousel from "@/hooks/useCarousel";

import StepOne from "./steps/StepOne";

export default function OnboardingForm() {
  /* 
  Onboarding process is a multi-step form
  1. Ask the user for log in information: Email and password (and maybe confirm it?)
  2. Ask wether the user is a candidate or an employer
  3. Ask for further identifying information depending on the previous answer
  */
  const { handleSubmit, setValue, watch } = useForm<SignUpSchema>({
    resolver: yupResolver(signUpSchema),
  });
  const {
    carouselRef,
    ScrollHandlers,
    percentage,
    scrollLeft,
    scrollRight,
    scrollLeftDisabled,
    scrollRightDisabled,
  } = useCarousel();

  const role = watch("role");

  const steps = useMemo(
    () => [
      <StepOne
        key="select-role-step"
        onRoleSelect={(role) => {
          setValue("role", role);
          scrollRight();
        }}
        selectedRole={role}
      />,
      <div key="step-2">Step 2</div>,
      <div key="step-3">Step 3</div>,
      <div key="step-4">Step 4</div>,
    ],
    [setValue, role, scrollRight]
  );

  const scrollButtonClassName =
    "disabled:opacity-0 disabled:pointer-events-none select-none rounded-full text-xl p-2 aspect-square max-h-[50px]";

  return (
    <>
      <div className="grid relative flex-grow">
        {/* <form className="container">{steps[step]}</form> */}
        <progress
          className="h-[3px] absolute w-full z-0 bg-gradient-to-r"
          value={percentage * 100}
          max={100}
        />
        <div
          ref={carouselRef}
          {...ScrollHandlers}
          className="carousel no-scrollbar h-full"
        >
          {steps.map((element, index) => (
            <div
              key={index}
              id={`carousel-item-${index}`}
              className="carousel-item"
            >
              {element}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 w-full justify-items-center">
        <button
          onClick={scrollLeft}
          disabled={scrollLeftDisabled}
          className={scrollButtonClassName}
        >
          {"<"}
        </button>
        <button
          onClick={scrollRight}
          disabled={scrollRightDisabled}
          className={scrollButtonClassName}
        >
          {">"}
        </button>
      </div>
    </>
  );
}
