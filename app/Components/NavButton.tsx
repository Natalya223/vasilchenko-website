import Link from "next/link";
import { ReactNode } from "react";

export default function NavButton({ children, href }: { children: ReactNode, href: string }) {
  return (
    <div className="flex items-center text-center">
      <Link href={href} className="rounded-full bg-primary text-background p-4">{children}</Link>
    </div>
  );
}