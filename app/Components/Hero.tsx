import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import NavButton from "./NavButton";
import PageContainer from "./PageContainer";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="relative h-screen w-full overflow-hidden">


        {/* Blob */}
        <Image src={"/images/elipse.png"} alt="decorative blob" width={772} height={772} className="absolute hidden lg:block object-cover left-24 -top-10"></Image>
        <Image src={"/images/elipse.png"} alt="decorative blob" width={184} height={184} className="absolute hidden lg:block object-cover left-215 top-155"></Image>

        {/* Bg */}
        <Image src={"/images/final.png"} alt="Big image of Natalia Vasilchenko" width={1920 / 1.2} height={1080 / 1.2} className="absolute hidden lg:block object-cover right-16 top-14 brightness-90"></Image>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-3% from-background to-30% to-background/0" />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/0" /> */}



        <PageContainer style="relative h-full">
          <div className="flex items-center h-full">
            <div>
              <Image src={"/images/final.png"} alt="Image of Natalia Vasilchenko" width={250} height={250} className="mb-12 rounded-full lg:hidden object-cover object-right aspect-square border-2 border-primary mx-auto brightness-90"></Image>
              <h1 className="text-h5 max-w-[10ch] leading-[100%] sm:text-h2 md:text-h1 text-center sm:text-start font-semibold mb-6 md:mb-4 sm:mb-2 mx-auto">Natalia Vasilchenko</h1>
              {/* <p className="mb-12 sm:mb-16 max-w-[50ch] text-background text-center sm:text-start">Pediatrician · Gastroenterologist · Allergist</p> */}
              <p className="mb-12 sm:mb-16 max-w-[50ch] leading-[120%] text-h6 text-center sm:text-start">Providing compassionate care and advanced treatments to help patients live healthier, longer lives</p>
              <div className="flex justify-center sm:block">
                <NavButton href="https://healthcity.kz/doctors-list/vasilcenko-natalia-vladimirovna" icon={
                  <FaArrowUpRightFromSquare />}>
                  Book an appointment</NavButton>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}