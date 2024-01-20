import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "max-w-screen-xl mx-auto px-2.5 md:px-20 w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
