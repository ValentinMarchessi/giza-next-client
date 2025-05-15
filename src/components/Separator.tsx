type Props = {
  text?: string;
  className?: string;
};

export default function Separator({ text, className = "" }: Props) {
  return (
    <div className={"flex items-center " + className}>
      <hr className="flex-grow border-t-1 border-neutral-400/75 dark:border-neutral-900" />
      {text && (
        <span className="mx-2 text-sm text-neutral-600 dark:text-neutral-800 pointer-events-none">
          {text}
        </span>
      )}
      <hr className="flex-grow border-t-1 border-neutral-400/75 dark:border-neutral-900" />
    </div>
  );
}
