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
          <ul className="min-h-20 flex items-center gap-32">
            <li className="grow"><Link href={"/"} className="text-h5 font-semibold whitespace-nowrap">Dr. Vasilchenko</Link></li>
            <li className="hidden font-medium lg:list-item"><Link href={"#about"} className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">About</Link></li>
            <li className="hidden font-medium lg:list-item"><Link href={"#testimonials"} className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">Testimonials</Link></li>
            <li className="hidden font-medium lg:list-item"><Link href={"#contact"} className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">Contact</Link></li>
            <li className="hidden font-medium lg:list-item"><Link href={"/"} className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">C.V.</Link></li>                     
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
}