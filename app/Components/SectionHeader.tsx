import { ReactNode } from "react";

export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h1 className="relative mb-16 sm:mb-32 text-h4 md:text-h3 font-bold capitalize text-center sm:text-start after:absolute after:bottom-0 after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:h-1 after:w-32 after:bg-primary">{children}</h1>
  );
}