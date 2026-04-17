import { FaGraduationCap, FaUserDoctor, FaGlobe, FaCertificate } from "react-icons/fa6";
import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const career: { year: string; title: string; subtitle: string; type: "education" | "career" | "current" | "academic" }[] = [
  {
    year: "1987",
    title: "Republican Medical College, Almaty",
    subtitle: "Graduated with honors — Nursing, General Profile",
    type: "education",
  },
  {
    year: "1997",
    title: "Kazakh National Medical University",
    subtitle: "M.D., Pediatrics Faculty",
    type: "education",
  },
  {
    year: "1997–2006",
    title: "Children's Polyclinic #17, Almaty",
    subtitle: "District Pediatrician",
    type: "career",
  },
  {
    year: "2006–Present",
    title: "KazNMU — Clinical Diagnostic Department",
    subtitle: "Pediatric Gastroenterologist & Allergist",
    type: "current",
  },
  {
    year: "Concurrent",
    title: "HealthCity LLC · Medical Center HAK",
    subtitle: "Gastroenterologist",
    type: "career",
  },
  {
    year: "Active",
    title: "KazNMU, Department of Pediatric Diseases",
    subtitle: "Assistant Professor",
    type: "academic",
  },
];

const training = [
  {
    year: "2017",
    title: "Advances in Gastroenterology",
    institution: "Rabin Medical Center — Beilinson Campus",
    location: "Petah Tikva, Israel",
  },
  {
    year: "2018",
    title: "Pediatric Medicine",
    institution: "Assuta Medical Center",
    location: "Tel Aviv, Israel",
  },
  {
    year: "2019",
    title: "Pulmonology — Modern Diagnostic Technologies",
    institution: "Rabin Medical Center — Hasharon Campus",
    location: "Petah Tikva, Israel",
  },
];

const certifications = [
  "Gastroenterology with Endoscopy — Highest Category (2025–2030)",
  "Pediatrics — Highest Category (2025–2030)",
  "Allergology & Immunology (2025–2030)",
];

const dotColor: Record<string, string> = {
  education: "bg-highlight",
  career: "bg-primary",
  current: "bg-primary",
  academic: "bg-primary",
};

export default function Career() {
  return (
    <section id="career">
      <div className="relative overflow-x-clip">
        <Image src={"/images/blob.png"} alt="decorative line" width={479} height={738} className="absolute -right-18 -top-60 -z-1 hidden sm:block opacity-50" />
        <PageContainer>
          <SectionHeader>Clinical Career & Training</SectionHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Career Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary rounded-full p-3 text-white">
                  <FaUserDoctor size={20} />
                </div>
                <h3 className="text-h6 font-semibold">Career History</h3>
              </div>
              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-primary/20" />
                <div className="flex flex-col gap-7">
                  {career.map((item) => (
                    <div key={item.title} className="relative pl-10">
                      <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-background ${dotColor[item.type]}`} />
                      <p className="text-xs font-bold text-primary mb-0.5">{item.year}</p>
                      <p className="font-semibold leading-tight">{item.title}</p>
                      <p className="text-sm text-foreground/60 mt-0.5">{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: International Training + Certifications */}
            <div className="flex flex-col gap-10">

              {/* International Training */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <FaGlobe size={20} />
                  </div>
                  <h3 className="text-h6 font-semibold">International Training</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {training.map((t) => (
                    <div key={t.title} className="group bg-white rounded-2xl shadow-[0px_5px_20px_1px] shadow-primary/15 px-5 py-4 flex gap-4 items-start hover:bg-primary duration-200">
                      <span className="shrink-0 mt-0.5 text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white">{t.year}</span>
                      <div>
                        <p className="font-semibold text-sm group-hover:text-white">{t.title}</p>
                        <p className="text-xs text-foreground/60 mt-0.5 group-hover:text-white/70">{t.institution}</p>
                        <p className="text-xs text-primary font-medium mt-0.5 group-hover:text-white/80">{t.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <FaCertificate size={20} />
                  </div>
                  <h3 className="text-h6 font-semibold">Current Certifications</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-highlight" />
                      <p className="text-sm font-medium">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}
