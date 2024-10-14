import { Role } from "@/types/enums";
import Image from "next/image";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

type Props = {
  selectedRole?: Role;
  onRoleSelect: (role: Role) => void;
};

export default function StepOne({ onRoleSelect, selectedRole }: Props) {
  return (
    <div
      key="step-1"
      className="grid grid-cols-2 auto-rows-[min-content_auto] w-full h-full gap-6 p-6"
    >
      <h2 className="col-span-2 text-center m-0">Who are you?</h2>
      <button
        type="button"
        onClick={() => onRoleSelect(Role.Candidate)}
        className={`relative flex flex-col items-center justify-center p-0 drop-shadow-none overflow-hidden ${
          selectedRole === Role.Candidate ? "shadow-success-250" : ""
        }`}
      >
        <Image
          src="/candidate.jpg"
          alt="candidate"
          width={2120}
          height={1414}
          objectFit="cover"
          className="absolute top-0 right-0 w-full h-full object-cover contrast-50"
        />
        <PersonOutlineOutlinedIcon fontSize="large" className="z-10" />
        <h3 className="z-10 text-5xl text-white">Candidate</h3>
      </button>
      <button
        type="button"
        onClick={() => onRoleSelect(Role.Company)}
        className={`relative flex flex-col items-center justify-center p-0 drop-shadow-none overflow-hidden ${
          selectedRole === Role.Company ? "shadow-success-250" : ""
        }`}
      >
        <Image
          src="/recruiter.jpg"
          alt="recruiter"
          width={960}
          height={425}
          objectFit="cover"
          className="absolute top-0 right-0 w-full h-full object-cover contrast-50"
        />
        <BusinessCenterOutlinedIcon fontSize="large" className="z-10" />
        <h3 className="z-10 text-5xl text-white">Employer</h3>
      </button>
    </div>
  );
}
