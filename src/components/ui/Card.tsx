interface DivProps {
  children: React.ReactNode;
  className?: React.HTMLProps<HTMLElement>["className"];
}

// container that can take className for tailwind utility class
const Card: React.FC<DivProps> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      <div className="p-4 flex flex-col flex-grow bg-slate-100 shadow-xl rounded-lg hover:scale-105 ease-in-out duration-300">
        {children}
      </div>
    </div>
  );
};

export default Card;
