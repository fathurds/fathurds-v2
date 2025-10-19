import { cn } from "@/lib/utils";

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("font-bold text-3xl text-white", className)}>
      {children}
    </h3>
  );
}

export default Title;
