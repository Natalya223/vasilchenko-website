import PageContainer from "./PageContainer";
import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="relative">
        {/* Background layer with two sections */}
        <div className="absolute inset-0 flex">
          <div className="w-full sm:w-[70%] bg-primary/20"></div>
          <div className="w-0 sm:w-[30%]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(110,110,94,0.2)_8px,_transparent_8px)] [background-size:40px_40px] [background-position:0_-12px]" />
            </div>
          </div>
        </div>

        {/* Content layer */}
        <div className="relative py-10">
          <PageContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div>
                  <h5 className="text-h4 font-semibold mb-6">Natalia Vasilchenko</h5>
                  <p className="max-w-[50ch]">Dr. Natalia Vasilchenko is an experienced pediatrician, gastroenterologist and allergist with more than 20 years of clinical practice. She specializes in the diagnosis and treatment of gastrointestinal and allergic disorders in children from infancy through adolescence, using modern, evidence-based approaches and comprehensive preventive care.
                    Her professional achievements include the Hippocrates Order, the Altyn Dariger award, and the Doctor of the Year award by Consilium Medicum journal. She is also a member of the National Medical Association, reflecting her active involvement in the medical community and commitment to clinical excellence.
                    Dr. Vasilchenko focuses on accurate diagnostics, long-term treatment strategies, and a personalized, child-centered approach, helping families navigate complex pediatric conditions with confidence and clarity</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Image src={"/images/IMG_0234.JPG"} alt="An image of doctor Vasilchenko" width={853} height={1280} className="rounded-2xl object-cover w-full sm:max-w-[420px] min-h-[620px] shadow-[0px_5px_20px_1px] shadow-primary/15"></Image>
              </div>
            </div>
          </PageContainer>
        </div>

      </div>
    </section>
  );
}