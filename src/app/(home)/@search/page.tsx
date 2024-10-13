import { useMemo } from "react";

export default function Search() {
  const jobLocationOptions: [value: string, label: string][] = useMemo(
    () => [
      ["all", "All Locations"],
      ["cairo", "Cairo"],
      ["giza", "Giza"],
      ["alexandria", "Alexandria"],
    ],
    []
  );

  return (
    <article
      id="search-section"
      className="flex flex-col gap-16 items-center section px-28"
    >
      <h1>
        Explore more <span className="text-primary-500">jobs</span>
      </h1>
      <div className="w-full flex textbox max-w-[600px]">
        <input
          name="job-name"
          id="job-name"
          defaultValue=""
          className="flex-grow rounded-r-none"
          placeholder="Search for jobs..."
        ></input>
        <select name="job-location" className="mx-1 px-2 rounded-none">
          {jobLocationOptions.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button className="rounded-l-none">Search</button>
      </div>
    </article>
  );
}
