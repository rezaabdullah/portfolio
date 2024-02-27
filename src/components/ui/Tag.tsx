const Tag = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="text-[10px] sm:text-xs px-2 py-1 bg-slate-300 rounded-full font-medium">
      {children}
    </div>
  );
};

export default Tag;
