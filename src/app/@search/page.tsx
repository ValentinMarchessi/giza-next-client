export default function Search() {
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
          <option value="all">All Locations</option>
          <option value="cairo">Cairo</option>
          <option value="giza">Giza</option>
          <option value="alexandria">Alexandria</option>
          <option value="luxor">Luxor</option>
          <option value="aswan">Aswan</option>
        </select>
        <button className="rounded-l-none">Search</button>
      </div>
    </article>
  );
}
