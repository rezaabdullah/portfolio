interface DivProps {
  children: React.ReactNode;
  className?: React.HTMLProps<HTMLElement>["className"]
}

// container that can take className for tailwind utility class
const Section: React.FC<DivProps> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      <div className="max-w-7xl m-auto px-4 md:px-6 xl:px-8 py-16">{children}</div>
    </div>
  );
};

export default Section;

