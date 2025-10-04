import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section>
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