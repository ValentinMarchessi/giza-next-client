import Image from "next/image";

interface Props {
  position: string;
  salaryRange: string;
  logo?: string;
}

export default function Listing({ position, salaryRange, logo }: Props) {
  return (
    <div
      key={position}
      className="listing bg-white rounded-md w-fit py-6 px-14 flex flex-col gap-1 h-fit"
    >
      {logo && <Image alt={`${position}-${logo}`} src={logo} />}
      <h2 className="font-medium text-lg">{position}</h2>
      <p className="text-primary-500 font-extrabold text-sm">{salaryRange}</p>
    </div>
  );
}
