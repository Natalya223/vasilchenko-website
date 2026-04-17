import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa6";
import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { ReactNode } from "react";

const awards: { icon: ReactNode; name: string; year: string; issuer: string; description: string }[] = [
  {
    icon: <FaTrophy size={32} />,
    name: "Order of Hippocrates",
    year: "2025",
    issuer: "National Medical Association of Kazakhstan",
    description: "Highest national honor awarded to physicians for outstanding contribution to medicine and public health",
  },
  {
    icon: <FaMedal size={32} />,
    name: "Altyn Dariger",
    year: "2024",
    issuer: "National Medical Association of Kazakhstan",
    description: "\"Golden Doctor\" — national award recognizing exceptional clinical achievement and long-term dedication to patient care",
  },
  {
    icon: <FaCertificate size={32} />,
    name: "Doctor of the Year",
    year: "2018",
    issuer: "Consilium Medicum Journal",
    description: "Annual recognition of outstanding medical practice awarded by Kazakhstan's leading peer-reviewed medical publication",
  },
];

export default function Awards() {
  return (
    <section id="awards">
      <div className="relative overflow-x-clip">
        <PageContainer>
          <SectionHeader>Awards & Recognition</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div key={award.name} className="group bg-white rounded-2xl shadow-[0px_5px_20px_1px] shadow-primary/15 p-8 hover:scale-105 duration-200 hover:bg-primary flex flex-col">
                <div className="text-white p-6 bg-highlight rounded-full w-fit mb-6 group-hover:bg-white group-hover:text-highlight">
                  {award.icon}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-h6 font-bold group-hover:text-white">{award.name}</p>
                  <span className="shrink-0 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white">{award.year}</span>
                </div>
                <p className="text-sm font-medium text-primary mb-3 group-hover:text-white/80">{award.issuer}</p>
                <p className="text-sm text-foreground/60 group-hover:text-white/70 mt-auto">{award.description}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </div>
    </section>
  );
}
