import { ReactNode } from "react";

export default function ExperienceCard({ children, headerText, contentText }: { children: ReactNode, headerText: string, contentText: string }) {
  return (
    <div className="rounded-2xl shadow-[0px_5px_20px_1px] shadow-primary/15 p-6 min-h-60 sm:min-h-80">
      <div className="flex gap-6 items-center mb-6 flex-row sm:flex-col xl:flex-row">
        <div className="p-7.25 bg-primary rounded-full">
          {children}
        </div>
        <p className="text-h6 font-medium text-primary">{headerText}</p>
      </div>
      <p className="text-primary">{contentText}</p>
    </div>
  );
}