import PageContainer from "./PageContainer";
import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="relative">
        {/* Background layer with two sections */}
        <div className="absolute inset-0 flex">
          <div className="w-full md:w-[70%] bg-primary/20"></div>
          <div className="w-0 md:w-[30%]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(110,110,94,0.2)_8px,_transparent_8px)] [background-size:40px_40px] [background-position:0_-12px]" />
            </div>
          </div>
        </div>

        {/* Content layer */}
        <div className="relative py-10">
          <PageContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div>
                  <h5 className="text-h4 font-medium mb-6 leading-[115%]">Natalia Vassilchenko</h5>
                  <p className="max-w-[50ch]">Dr. Natalia Vassilchenko is a board-certified physician with over 35 years of medical experience, specializing in pediatric gastroenterology, allergology, and pediatrics. She graduated from Kazakh National Medical University in 1997 and has held a senior clinical position at its Clinical Diagnostic Department since 2006.</p>
                  <p className="max-w-[50ch] mt-4">She has pursued advanced international training at Rabin Medical Center and Assuta Medical Center in Israel, and holds highest-category certifications in Gastroenterology with Endoscopy, Pediatrics, and Allergology & Immunology — all valid through 2030. She also serves as assistant professor at KazNMU&apos;s Department of Pediatric Diseases.</p>
                  <p className="max-w-[50ch] mt-4">Her work has been recognized with the Order of Hippocrates (2025), the Altyn Dariger Medal (2024), and Doctor of the Year by Consilium Medicum (2018). She is a member of the National Medical Association of Kazakhstan and an active participant in international medical conferences.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Image src={"/images/IMG_0234.JPG"} alt="An image of doctor Vassilchenko" width={853} height={1280} className="rounded-2xl object-cover w-full md:max-w-[420px] shadow-[0px_5px_20px_1px] shadow-primary/15"></Image>
              </div>
            </div>
          </PageContainer>
        </div>

      </div>
    </section>
  );
}