import { ReactNode } from "react";

export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h1 className="relative mt-32 mb-20 font-merriweather text-center text-h2 font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:bg-primary after:w-32">{children}</h1>
  );
}