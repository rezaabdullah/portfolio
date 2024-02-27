type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "reset";
  path?: string;
};

// const Button = ({ children }: Readonly<{ children: React.ReactNode }>) => {
const Button = ({ type, label, onClick, path }: ButtonProps) => {
  let typeBtn = type ? type : "button";

  return (
    <div className="flex flex-grow">
      <button
        type={typeBtn}
        onClick={onClick}
        className="cursor-pointer flex-grow min-w-12 min-h-9 px-4 py-2 rounded-lg font-bold uppercase text-sm xs:text-base xl:text-xl xl:py-4 xl:px-6 2xl:text-3xl border-2 border-slate-700 hover:bg-sky-600 hover:text-slate-50 hover:border-sky-200 hover:ease-in-out duration-300 text-center"
      >
        {path ? <a href={`/#${path}`}>{label}</a> : label}
      </button>
    </div>
  );
};

export default Button;
