"use client"

import Link from "next/link";
import PageContainer from "./PageContainer"
import { FaPhone } from "react-icons/fa6";

const navLink = "relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full";

export default function Navbar() {
  return (
    <header className={`hidden lg:block fixed max-w-[1280px] inset-x-0 mx-auto lg:mt-6 px-4 sm:px-6 lg:px-8 z-1 bg-white shadow-xs text-foreground lg:rounded-full`}>
      <PageContainer>
        <nav>
          <ul className="min-h-20 flex items-center justify-center sm:justify-between">
            <li><Link href={"/"} className="text-h6 font-medium whitespace-nowrap">Vassilchenko N.V.</Link></li>
            <div className="hidden lg:flex items-center gap-5 text-sm">
              <li className="hidden lg:list-item font-medium"><Link href={"#about"} className={navLink}>About</Link></li>
              <li className="hidden lg:list-item font-medium"><Link href={"#awards"} className={navLink}>Awards</Link></li>
              <li className="hidden lg:list-item font-medium"><Link href={"#publications"} className={navLink}>Publications</Link></li>
              <li className="hidden lg:list-item font-medium"><Link href={"#career"} className={navLink}>Career</Link></li>
              <li className="hidden lg:list-item font-medium"><Link href={"#testimonials"} className={navLink}>Testimonials</Link></li>
              <li className="hidden lg:list-item font-medium"><Link href={"#contact"} className={navLink}>Contact</Link></li>
              <li className="hidden lg:list-item font-medium"><Link href={"https://orcid.org/0009-0005-6772-3910"} className={navLink}>ORCID</Link></li>
            </div>
            <li className="hidden lg:flex items-center gap-2 shrink-0">
              <div className="rounded-full p-2 border-2 border-primary">
                <FaPhone size={15} className="text-primary" />
              </div>
              <Link href={"tel:+77066985568"} className="text-h6 text-primary font-semibold whitespace-nowrap">+7 706 698 55 68</Link>
            </li>
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
}
