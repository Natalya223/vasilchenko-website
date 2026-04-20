import { FaBookOpen, FaScroll, FaArrowUpRightFromSquare } from "react-icons/fa6";
import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";
import NavButton from "./NavButton";
import Image from "next/image";
import Link from "next/link";

type Specialty = "Gastroenterology" | "Allergology" | "Pediatrics";

const specialtyStyle: Record<Specialty, string> = {
  Gastroenterology: "bg-primary/10 text-primary",
  Allergology: "bg-highlight/10 text-highlight",
  Pediatrics: "bg-foreground/10 text-foreground/70",
};

const publications: { title: string; year: string; link: string; type: "Article" | "Patent"; specialty: Specialty }[] = [
  {
    title: "Use of Thyme Herb for the Treatment of Giardiasis",
    year: "2025",
    type: "Patent",
    specialty: "Gastroenterology",
    link: "https://scholar.google.com/citations?view_op=view_citation&user=orC5iyEAAAAJ&citation_for_view=orC5iyEAAAAJ:d1gkVwhDpl0C"
  },
  {
    title: "Vitamin D Deficiency as a Performance Decrement Factor in Adolescents",
    year: "2018",
    type: "Article",
    specialty: "Pediatrics",
    link: "https://scholar.google.com/citations?view_op=view_citation&user=orC5iyEAAAAJ&citation_for_view=orC5iyEAAAAJ:u-x6o8ySG0sC "
  },
  {
    title: "A Note for General Practitioners: An Allergy Guide to Pollinosis — Triggers & Myths",
    year: "2025",
    type: "Article",
    specialty: "Allergology",
    link: "https://scholar.google.com/citations?view_op=view_citation&user=orC5iyEAAAAJ&citation_for_view=orC5iyEAAAAJ:9yKSN-GCB0IC"
  },
  {
    title: "How to Recognize 'Nonspecific' Gastrointestinal Symptoms and Identify Disease in Time",
    year: "2025",
    type: "Article",
    specialty: "Gastroenterology",
    link: "https://scholar.google.com/citations?view_op=view_citation&user=orC5iyEAAAAJ&citation_for_view=orC5iyEAAAAJ:2osOgNQ5qMEC"
  },
  {
    title: "Atopic Dermatitis in Infants Under One Year of Age",
    year: "2012",
    type: "Article",
    specialty: "Allergology",
    link: "https://scholar.google.com/citations?view_op=view_citation&user=orC5iyEAAAAJ&citation_for_view=orC5iyEAAAAJ:qjMakFHDy7sC"
  },
  {
    title: "Treatment and Preventive Strategies for Frequently Ill Children",
    year: "2011",
    type: "Article",
    specialty: "Pediatrics",
    link: "https://scholar.google.com/citations?view_op=view_citation&user=orC5iyEAAAAJ&citation_for_view=orC5iyEAAAAJ:IjCSPb-OGe4C"
  },
  {
    title: "Treatment of Atopic Dermatitis in Children",
    year: "2007",
    type: "Article",
    specialty: "Allergology",
    link: "https://scholar.google.com/citations?view_op=view_citation&user=orC5iyEAAAAJ&citation_for_view=orC5iyEAAAAJ:Y0pCki6q_DkC"
  },
];

export default function Publications() {
  return (
    <section id="publications">
      <div className="relative overflow-x-clip">
        <Image src={"/images/line.png"} alt="decorative line" width={479} height={738} className="absolute -right-18 top-5 -z-1 hidden sm:block flip-x " />
        <Image src={"/images/line.png"} alt="decorative line" width={479} height={738} className="absolute -left-18 top-5 -z-1 hidden sm:block" />
        <PageContainer>
          <SectionHeader>Research & Publications</SectionHeader>

          {/* Publication list */}
          <div className="flex flex-col gap-3">
            {publications.map((pub) => (
              <Link href={pub.link} key={pub.title} className="group bg-white rounded-2xl shadow-[0px_5px_20px_1px] shadow-primary/15 px-6 py-4 flex items-start gap-4 hover:bg-primary duration-200 hover:scale-[1.01]">
                <div className="shrink-0 mt-0.5 text-primary group-hover:text-white">
                  {pub.type === "Patent" ? <FaScroll size={18} /> : <FaBookOpen size={18} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium group-hover:text-white">{pub.title}</p>
                  <div className="flex items-center gap-2 mt-2 sm:hidden">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${specialtyStyle[pub.specialty]} group-hover:bg-white/20 group-hover:text-white`}>
                      {pub.specialty}
                    </span>
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap group-hover:bg-white/20 group-hover:text-white">
                      {pub.year}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 hidden sm:flex items-center gap-2 ml-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${specialtyStyle[pub.specialty]} group-hover:bg-white/20 group-hover:text-white`}>
                    {pub.specialty}
                  </span>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap group-hover:bg-white/20 group-hover:text-white">
                    {pub.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* ORCID link */}
          <div className="mt-10 flex justify-center sm:justify-start">
            <NavButton href="https://orcid.org/0009-0005-6772-3910" icon={<FaArrowUpRightFromSquare />}>
              View full profile on ORCID
            </NavButton>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}
