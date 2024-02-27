"use client";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

// const Button = ({ children }: Readonly<{ children: React.ReactNode }>) => {
const SubmitButton = ({ label, onClick }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-grow">
      <button
        onClick={onClick}
        disabled = { pending }
        className="cursor-pointer flex-grow min-w-12 min-h-9 px-4 py-2 rounded-lg font-bold uppercase text-sm xs:text-base xl:text-xl xl:py-4 xl:px-6 2xl:text-3xl border-2 border-slate-700 disabled:bg-slate-400 hover:bg-sky-600 hover:text-slate-50 hover:border-sky-200 hover:ease-in-out duration-300 text-center"
      >
        {pending ? "Submitting..." : label}
      </button>
    </div>
  );
};

export default SubmitButton;
