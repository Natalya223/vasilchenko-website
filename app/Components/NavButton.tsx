import Link from "next/link";
import { ReactNode } from "react";

export default function NavButton({ href, children, icon }: { href: string, children: ReactNode, icon?: ReactNode }) {
  return (
    <div className="flex items-center justify-center sm:block">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full bg-primary text-white py-4 px-6 hover:bg-white hover:text-primary duration-200 whitespace-nowrap"
      >
        <span>{children}</span>
        {icon && <span className="flex-shrink-0">{icon}</span>}
      </Link>
    </div>
  );
}