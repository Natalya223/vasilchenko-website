import { ReactNode } from "react";

export default function PageContainer({ children, style="" }: { children: ReactNode, style?:string }) {
  return (
    <div className={`container max-w-[1280px] mx-auto px-8 sm:px-6 lg:px-4 ${style}`}>
      {children}
    </div>
  );
}