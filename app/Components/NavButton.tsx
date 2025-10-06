import Link from "next/link";
import { ReactNode } from "react";

export default function NavButton({ children, href }: { children: ReactNode, href: string }) {
  return (
    <div className="flex items-center text-center">
      <Link href={href} className="rounded-full bg-primary text-background py-4 px-6 hover:bg-background hover:text-primary duration-200 border-1 border-primary whitespace-nowrap">{children}</Link>
    </div>
  );
}