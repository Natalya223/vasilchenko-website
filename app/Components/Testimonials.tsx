import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section>
      <div className="relative">
        <Image src="/images/blob.png" alt="An image of blue blob decoration" width={368} height={627} className="absolute right-0 top-[-225px] overflow-x-hidden"/>
      </div>
      <PageContainer>
        <SectionHeader>Testimonials</SectionHeader>
        <div className="grid grid-cols-4 gap-6 mt-44">
          <TestimonialCard name="John Smith" testimonialText="Great gastroenterological service. Had my gastritis cured. Great professional overall. Pretty cool" rating={5} />
          <TestimonialCard name="Jane Smith" testimonialText="Great gastroenterological service. Had my gastritis cured. Great professional overall. Pretty cool" rating={5} />
          <TestimonialCard name="James Smith" testimonialText="Great gastroenterological service. Had my gastritis cured. Great professional overall. Pretty cool" rating={5} />
          <TestimonialCard name="Dean Smith" testimonialText="Great gastroenterological service. Had my gastritis cured. Great professional overall. Pretty cool" rating={5} />
        </div>
      </PageContainer>
    </section>
  );
}