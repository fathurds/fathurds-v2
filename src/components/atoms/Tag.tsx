import { cn } from "@/lib/utils";
import type React from "react";

function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full py-0.5 px-2 bg-sky-800/50 text-sky-300 font-semibold text-xs",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Tag;
