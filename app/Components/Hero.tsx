import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import NavButton from "./NavButton";
import PageContainer from "./PageContainer";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Blob — desktop */}
        <Image src={"./images/circle-blue.png"} alt="decorative blob" width={740} height={740} className="absolute hidden lg:block object-cover left-24 -top-5 opacity-60"></Image>
        <Image src={"./images/circle-blue.png"} alt="decorative blob" width={184} height={184} className="absolute hidden lg:block object-cover left-215 top-155 opacity-60"></Image>

        {/* Blob — mobile */}
        <Image src={"./images/circle-blue.png"} alt="decorative blob" width={420} height={420} className="absolute lg:hidden -top-20 -right-34 opacity-30"></Image>
        <Image src={"./images/circle-blue.png"} alt="decorative blob" width={260} height={260} className="absolute lg:hidden bottom-30 -left-16 opacity-40"></Image>

        {/* Bg */}
        <Image src={"./images/final.webp"} alt="Big image of Natalia Vassilchenko" width={1920 / 1.2} height={1080 / 1.2} className="absolute hidden lg:block object-cover right-16 top-14 brightness-90"></Image>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-3% from-background to-30% to-background/0" />

        <PageContainer style="relative h-full">
          <div className="flex items-center h-full">
            <div>
              <Image src={"./images/final.webp"} alt="Image of Natalia Vassilchenko" width={256} height={256} className="mb-12 rounded-full lg:hidden object-cover object-right aspect-square border-2 border-primary mx-auto bg-background"></Image>
              <h1 className="text-h5 max-w-[10ch] leading-[100%] sm:text-h2 md:text-h1 text-center sm:text-start font-semibold mb-6 md:mb-4 sm:mb-2 mx-auto">Natalia Vassilchenko</h1>
              {/* <p className="mb-12 sm:mb-16 max-w-[50ch] text-background text-center sm:text-start">Pediatrician · Gastroenterologist · Allergist</p> */}
              <p className="mb-12 sm:mb-16 max-w-[50ch] leading-[120%] text-h6 text-center sm:text-start">Providing compassionate care and advanced treatments to help patients live healthier, longer lives</p>
              <div className="flex justify-center sm:block">
                <NavButton href="https://healthcity.kz/doctors-list/vasilcenko-natalia-vladimirovna" icon={<FaArrowUpRightFromSquare />}>
                  Book an appointment
                </NavButton>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}