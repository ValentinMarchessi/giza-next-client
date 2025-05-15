type Props = {
  width: string;
  height: string;
  className?: string;
};

export default function PlaceholderRect({ width, height, className }: Props) {
  return (
    <div
      className={`skeleton bg-neutral-800 dark:bg-neutral-950 rounded-lg ${className}`}
      style={{ width, height }}
    ></div>
  );
}
