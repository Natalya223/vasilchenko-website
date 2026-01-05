import NavButton from "./NavButton";
import PageContainer from "./PageContainer";
import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/vasilchenko-website' : '';

export default function Hero() {
  return (
    <section>
      <div className="relative h-screen w-full overflow-hidden">

        {/* Bg */}
        <Image src={`${basePath}/images/IMG_0233_1.jpg`} alt="Big image of doctor Vasilchenko" fill className="absolute hidden lg:block object-cover object-[center_15%]"></Image>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/25 md:bg-gradient-to-r md:from-primary md:to-transparent" />

        <PageContainer style="relative h-full">
          <div className="flex items-center h-full">
            <div>
              <h1 className="text-h5 sm:text-h2 md:text-h1 text-center sm:text-start font-bold text-background mb-4 md:mb-2 sm:mb-0 whitespace-nowrap">Dr. Vasilchenko</h1>
              {/* <p className="mb-12 sm:mb-16 max-w-[50ch] text-background text-center sm:text-start">Pediatrician · Gastroenterologist · Allergist</p> */}
              <p className="mb-12 sm:mb-16 max-w-[50ch] text-h6 text-background text-center sm:text-start">Providing compassionate care and advanced treatments to help patients live healthier, longer lives</p>
              <div className="flex justify-center sm:block">
                <NavButton href="https://healthcity.kz/doctors-list/vasilcenko-natalia-vladimirovna">Book an appointment</NavButton>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}