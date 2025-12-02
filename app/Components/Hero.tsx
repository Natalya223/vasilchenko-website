import NavButton from "./NavButton";
import PageContainer from "./PageContainer";
import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/vasilchenko-website' : '';

export default function Hero() {
  return (
    <section>
      <div className=" relative h-screen w-full overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />

        {/* Bg */}
        <Image src={`${basePath}/images/photo3.png`} alt="Big image of doctor Vasilchenko" width={774*1.5} height={1032*1.5} className="absolute -right-50 -bottom-40" ></Image>

        <PageContainer style="relative h-full">
          <div className="flex items-center h-full">
            <div>
              <h1 className="text-h5 sm:text-h2 md:text-h1 text-center sm:text-start font-bold text-background mb-4 md:mb-2 sm:mb-0 whitespace-nowrap">Dr. Vasilchenko</h1>
              <p className="mb-12 sm:mb-16 max-w-[50ch] text-background text-center sm:text-start">Providing compassionate care and advanced treatments to help patients live healthier, longer lives</p>
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