interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

export default function Select({ children, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {props.label && (
        <label htmlFor={props.id} className="text-sm font-medium">
          {props.label}
        </label>
      )}
      <select
        {...props}
        className={`border border-neutral-50 dark:border-black-950 
          dark:bg-black-300 shadow-sm
          rounded-lg py-2 focus:outline-none focus:ring-2
          dark:text-neutral-200 dark:placeholder:text-neutral-800
          focus:ring-primary-500 dark:focus:ring-primary-500 ${
            props.error ? "border-error-500" : ""
          }`}
      >
        {children}
      </select>
      {props.error && <p className="text-error-500">{props.error}</p>}
    </div>
  );
}
