"use client";

import { useCallback, useMemo, useState } from "react";
import { SignUpSchema, signUpSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Role } from "@/types/enums";
import useCarousel from "@/hooks/useCarousel";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import Image from "next/image";

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

  const steps = useMemo(
    () => [
      <div
        key="step-1"
        className="grid grid-cols-2 auto-rows-[min-content_auto] w-full h-full gap-6 p-6"
      >
        <h2 className="col-span-2 text-center m-0">Who are you?</h2>
        <button
          type="button"
          onClick={() => setValue("role", Role.Candidate)}
          className="relative flex flex-col items-center justify-center p-0 drop-shadow-none overflow-hidden"
        >
          <Image
            src="/candidate.jpg"
            alt="candidate"
            width={2120}
            height={1414}
            objectFit="cover"
            className="absolute top-0 right-0 w-full h-full object-cover contrast-50"
          />
          <PersonOutlineOutlinedIcon fontSize="large" className="z-10" />
          <h3 className="z-10 text-5xl text-white">Candidate</h3>
        </button>
        <button
          type="button"
          onClick={() => setValue("role", Role.Company)}
          className="relative flex flex-col items-center justify-center p-0 drop-shadow-none overflow-hidden"
        >
          <Image
            src="/recruiter.jpg"
            alt="recruiter"
            width={960}
            height={425}
            objectFit="cover"
            className="absolute top-0 right-0 w-full h-full object-cover contrast-50"
          />
          <BusinessCenterOutlinedIcon fontSize="large" className="z-10" />
          <h3 className="z-10 text-5xl text-white">Employer</h3>
        </button>
      </div>,
      <div key="step-2">Step 2</div>,
      <div key="step-3">Step 3</div>,
      <div key="step-4">Step 4</div>,
    ],
    [setValue]
  );

  const scrollButtonClassName =
    "disabled:opacity-0 disabled:pointer-events-none select-none rounded-full text-xl p-2 aspect-square max-h-[50px]";

  return (
    <>
      <div className="grid relative bg-neutral-200 shadow-lg flex-grow">
        {/* <form className="container">{steps[step]}</form> */}
        <progress
          className="h-[3px] absolute w-full z-0 bg-gradient-to-r"
          value={percentage * 100}
          max={100}
        >
          {percentage * 100}%
        </progress>
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
