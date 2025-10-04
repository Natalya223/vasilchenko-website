import PageContainer from "./PageContainer";
import Image from "next/image";

export default function About() {
  return (
    <section>
      <div className="relative">
        {/* Background layer with two sections */}
        <div className="absolute inset-0 flex">
          <div className="w-[70%] bg-primary/15"></div>
          <div className="w-[30%]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(110,110,94,0.1)_8px,_transparent_8px)] [background-size:40px_40px] [background-position:0_-12px]" />
            </div>
          </div>
        </div>

        {/* Content layer */}
        <div className="relative py-10">
          <PageContainer>
            <div className="grid grid-cols-2">
              <div className="flex items-center">
                <div>
                  <h5 className="text-h4 font-semibold mb-6">Natalia Vasilchenko</h5>
                  <p className="max-w-[50ch]">I am an MD, PhD pediatrician, gastroenterologist, and allergist of the highest category with extensive clinical experience. My primary specialization is the diagnosis and treatment of gastrointestinal and allergic diseases in children.
                    Throughout my career, I have placed strong emphasis on a comprehensive approach that combines treatment with prevention, aiming to ensure long-term health outcomes for young patients.
                    I hold a medical degree in Pediatrics from the Almaty State Medical Institute and have completed advanced training and professional development at leading medical centers in Kazakhstan, Russia, and Europe, including Saint Petersburg, Moscow, and Almaty. This academic foundation, combined with years of clinical practice, allows me to apply modern, evidence-based methods in pediatrics, gastroenterology, and allergology</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/doctor1.jpg`} alt="An image of doctor Vasilchenko" width={420} height={620} className="rounded-2xl object-cover min-h-[620px]"></Image>
              </div>
            </div>
          </PageContainer>
        </div>

      </div>
    </section>
  );
}