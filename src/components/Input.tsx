import FileIcon from "./Icons/FileIcon";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, ...props }: Props) {
  if (props.type === "file") {
    return <FileInput label={label} error={error} {...props} />;
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`border border-neutral-50 dark:border-black-950 
          dark:bg-black-300 shadow-sm
          rounded-lg px-3 py-2 focus:outline-none focus:ring-2
          dark:text-neutral-200 dark:placeholder:text-neutral-800
          focus:ring-primary-500 dark:focus:ring-primary-500 ${
            error ? "border-error-500" : ""
          }`}
      />
      {error && <p className="text-error-500">{error}</p>}
    </div>
  );
}

function FileInput({ label, error, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1 aspect-video">
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <div
        className="relative grow rounded-lg px-28 py-14
        bg-white-950 dark:bg-black-300
      grid items-center justify-center justify-items-center 
      auto-rows-min align-middle shadow-lg
      border border-neutral-50 dark:border-black-950
      outline-1 outline-dashed -outline-offset-8
      outline-neutral-200 dark:outline-neutral-900
      "
      >
        <input
          className="absolute opacity-0 top-0 left-0 w-full h-full"
          {...props}
        />
        <FileIcon />
        <label className="text-xs mt-1 text-neutral-500">Upload</label>
      </div>
      {error && <p className="text-error-500">{error}</p>}
    </div>
  );
}
