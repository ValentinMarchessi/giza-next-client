type Props = {
  text?: string;
};

export default function Separator({ text }: Props) {
  return (
    <div className="flex items-center">
      <hr className="flex-grow border-t-1 border-neutral-400/75 dark:border-neutral-900" />
      {text && (
        <span className="mx-2 text-sm text-neutral-600 dark:text-neutral-800">
          {text}
        </span>
      )}
      <hr className="flex-grow border-t-1 border-neutral-400/75 dark:border-neutral-900" />
    </div>
  );
}
