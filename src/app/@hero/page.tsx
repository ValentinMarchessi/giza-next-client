const jobs_for_you = "16,780";

export default function Hero() {
  return (
    <article
      id="landing-hero"
      className="bg-primary-100 section flex items-center px-32"
    >
      <section className="w-1/2 flex flex-col gap-4 items-start">
        <h1 className="text-5xl text-nowrap">
          <span className="text-primary-500">{jobs_for_you} Jobs</span> For You
        </h1>
        <p className="text-neutral-600 text-md">
          Non enim eu excepteur cupidatat consectetur do ea est reprehenderit
          incididunt irure veniam cupidatat est non amet. Enim duis aute tempor
          laboris ipsum dolore non. Adipisicing laboris laboris laboris
        </p>
        <button>Explore Now</button>
      </section>
      <section className="w-1/2"></section>
    </article>
  );
}
