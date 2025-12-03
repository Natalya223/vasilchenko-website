import { ReactNode } from "react";

export default function ExperienceCard({ children, headerText, contentText }: { children: ReactNode, headerText: ReactNode, contentText: ReactNode }) {
  return (
    <div className="rounded-2xl shadow-[0px_5px_20px_1px] shadow-primary/15 p-6 min-h-60 sm:min-h-80 hover:scale-110 duration-200">
      <div className="flex gap-4 items-center mb-6 flex-row sm:flex-col xl:flex-row">
        <div className="p-7.25 bg-primary rounded-full text-background">
          {children}
        </div>
        {headerText}
      </div>
      {contentText}
    </div>
  );
}