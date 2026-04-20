import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="relative">
        <Image src={"/images/blob.png"} alt="An image of blue blob decoration" width={368} height={627} className="absolute right-0 top-[-225px] -z-1 hidden sm:block opacity-50" />
        <PageContainer style="z-1">
          <SectionHeader>Testimonials</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-18 mt-22 sm:mt-44">
            <TestimonialCard
              name="Boris Sapoznikov, MD"
              title="Head of Gastroenterology & Hepatology Unit"
              institution="Rabin Medical Center — Hasharon Hospital, Israel"
              testimonialText="During the program, Dr. Vassilchenko demonstrated herself to be a knowledgeable and highly motivated specialist in gastroenterology and endoscopy, showing great curiosity, asking many questions, and maintaining a strong level of engagement throughout. The knowledge and practical skills she acquired are successfully applied in her medical practice, improving the quality of diagnosis and treatment for her patients."
            />
            <TestimonialCard
              name="Irina Sokhetskaya"
              title="Patient — visiting from Canada"
              institution="Health City Clinic, Almaty"
              rating={5}
              testimonialText="As a citizen of Canada, I traveled to the Health City clinic in Almaty for a comprehensive check-up. The level of care and attention I received was truly incredible. Your prescriptions and treatment were absolutely correct and helped me significantly. Thank you very much! God bless you!"
            />
          </div>
        </PageContainer>
      </div>
    </section>
  );
}