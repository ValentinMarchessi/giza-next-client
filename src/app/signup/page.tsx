import LogInForm from "./components/LogInForm";

export default function SignUp() {
  return (
    <section
      id="signup"
      className="w-full px-6 my-auto grid grid-cols-2 items-center justify-items-center justify-center  self-center content-center"
    >
      <aside>Some giant image</aside>
      <LogInForm />
    </section>
  );
}
