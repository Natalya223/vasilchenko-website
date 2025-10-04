import NavButton from "./NavButton";
import PageContainer from "./PageContainer";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className=" relative h-screen w-full overflow-hidden">

        {/* Bg */}
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/2147796556.jpg`} alt="Big image of doctor Vasilchenko" fill  className="absolute inset-0 flip-x object-cover" ></Image>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />

        <PageContainer style="relative h-full">
          <div className="flex items-center h-full">
            <div>
              <h1 className="text-h1 font-bold text-background">Dr. Vasilchenko</h1>
              <p className="mb-16 max-w-[50ch] text-background">Providing compassionate care and advanced treatments to help patients live healthier, longer lives</p>
              <NavButton href="https://healthcity.kz/doctors-list/vasilcenko-natalia-vladimirovna">Book an appointment</NavButton>
            </div>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}