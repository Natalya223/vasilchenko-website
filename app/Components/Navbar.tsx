"use client"

import Link from "next/link";
import PageContainer from "./PageContainer"
import { FaPhone } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className={`fixed max-w-[1280px] inset-x-0 mx-auto lg:mt-6 px-4 sm:px-6 lg:px-8 z-1 bg-white text-foreground lg:rounded-full`}>
      <PageContainer>
        <nav>
          <ul className="min-h-20 flex items-center justify-center sm:justify-between gap-32">
            <li ><Link href={"/"} className="text-h5 font-semibold whitespace-nowrap text-center mx-auto">Vasilchenko N.V.</Link></li>
            <div className="hidden lg:flex items-center gap-10">
              <li className="hidden font-medium lg:list-item"><Link href={"#about"} className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">About</Link></li>
              <li className="hidden font-medium lg:list-item"><Link href={"#testimonials"} className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">Testimonials</Link></li>
              <li className="hidden font-medium lg:list-item"><Link href={"#contact"} className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">Contact</Link></li>
              <li className="hidden font-medium lg:list-item"><Link href={"/"} className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">C.V.</Link></li>
            </div>
            <li className="hidden lg:flex items-center">
              <div className="rounded-full p-2 mr-3 border-2 border-primary">
                <FaPhone size={18} className="text-primary" />
              </div>
              <Link href={"/"} className="text-h6 text-primary font-semibold whitespace-nowrap">+7 706 698 55 68</Link>
            </li>
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
}