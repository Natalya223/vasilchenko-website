"use client"

import Link from "next/link";
import PageContainer from "./PageContainer"
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOnTop, setIsOnTop] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setIsOnTop(window.scrollY <= 40);
    };

    // Subscribe for scroll event
    window.addEventListener("scroll", onScroll, { passive: true });

    // Trigger initial scroll
    onScroll();

    // Unsubscribe from scroll event on unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
    };

  }, []);

  return (
    <header className={`fixed w-full z-1 ${isOnTop ? "text-background" : "bg-background text-foreground"}`}>
      <PageContainer>
        <nav className="">
          <ul className="min-h-20 flex items-center gap-36">
            <li className="grow"><Link href={"/"} className="text-h5 font-semibold">Dr. Vasilchenko</Link></li>
            <li><Link href={"/"}>About</Link></li>
            <li><Link href={"/"}>Testimonials</Link></li>
            <li><Link href={"/"}>Contact</Link></li>
            <li><Link href={"/"}>C.V.</Link></li>
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
}