import { ReactNode } from "react";

export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h1 className="relative mb-32 text-[50.52px] font-bold after:absolute capitalize after:bottom-0 after:left-0 after:h-1 after:bg-primary after:w-[10%]">{children}</h1>
  );
}