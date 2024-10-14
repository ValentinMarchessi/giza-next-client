import OnboardingForm from "./components/OnboardingForm";

export default async function Onboarding() {
  return (
    <main id="onboarding" className="mx-12 my-6 flex flex-col grow">
      <h1>Onboarding</h1>
      <OnboardingForm />
    </main>
  );
}
