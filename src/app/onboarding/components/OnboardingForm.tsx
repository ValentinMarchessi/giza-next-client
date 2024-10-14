"use client";

import { useCallback, useMemo, useState } from "react";

export default function OnboardingForm() {
  /* 
  Onboarding process is a multi-step form
  1. Ask the user for log in information: Email and password (and maybe confirm it?)
  2. Ask wether the user is a candidate or an employer
  3. Ask for further identifying information depending on the previous answer
  */

  const steps = useMemo(
    () => [
      <div key="step-1">Step 1</div>,
      <div key="step-2">Step 2</div>,
      <div key="step-3">Step 3</div>,
    ],
    []
  );
  const [step, setStep] = useState(0);
  const prevStep = useCallback(() => setStep((s) => s - 1), [setStep]);
  const nextStep = useCallback(() => setStep((s) => s + 1), [setStep]);

  return (
    <div className="flex flex-col items-center">
      {steps[step]}
      <div className="grid grid-cols-2">
        <button
          onClick={prevStep}
          disabled={step <= 0}
          className="disabled:opacity-0 disabled:pointer-events-none select-none rounded-full text-xl p-2 aspect-square"
        >
          {"<"}
        </button>
        <button
          onClick={nextStep}
          disabled={step >= steps.length - 1}
          className="disabled:opacity-0 disabled:pointer-events-none select-none rounded-full text-xl p-2 aspect-square"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
