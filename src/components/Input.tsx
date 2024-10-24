interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={props.id} className="text-t3 font-semibold">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`border border-neutral-200 dark:border-black-950 
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
