import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="relative">
        <Image src={"/images/blob.png"} alt="An image of blue blob decoration" width={368} height={627} className="absolute right-0 top-[-225px] -z-1 hidden sm:block" />
        <PageContainer style="z-1">
          <SectionHeader>Testimonials</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-18 mt-22 sm:mt-44">
            <TestimonialCard name="John Smith" testimonialText="Great gastroenterological service. Had my gastritis cured. Great professional overall. Pretty cool" rating={5} />
            <TestimonialCard name="Jane Smith" testimonialText="Great gastroenterological service. Had my gastritis cured. Great professional overall. Pretty cool" rating={5} />
            <TestimonialCard name="James Smith" testimonialText="Great gastroenterological service. Had my gastritis cured. Great professional overall. Pretty cool" rating={5} />
            <TestimonialCard name="Dean Smith" testimonialText="Great gastroenterological service. Had my gastritis cured. Great professional overall. Pretty cool" rating={5} />
          </div>
        </PageContainer>
      </div>
    </section>
  );
}