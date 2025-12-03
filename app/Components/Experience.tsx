import { FaUserDoctor, FaMicroscope, FaGraduationCap, FaMedal } from "react-icons/fa6";
import ExperienceCard from "./ExperienceCard";
import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section>
      <PageContainer>
        <SectionHeader>About Me</SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ExperienceCard
            headerText={
              <p className="text-h6 font-medium text-primary">Experience</p>
            }
            contentText={
              <p className="text-primary">Over 20 years of clinical work in pediatrics, gastroenterology, and allergology</p>
            }>
            <FaUserDoctor size={38} className="" />
          </ExperienceCard>
          <ExperienceCard
            headerText={
              <p className="text-h6 font-medium text-primary">Publications</p>
            } contentText={
              <p className="text-primary">Author of clinical articles in pediatric gastroenterology, allergy medicine, and pediatric care</p>
            }>
            <FaMicroscope size={38} className="" />
          </ExperienceCard>
          <ExperienceCard
            headerText={
              <p className="text-h6 font-medium text-primary">Expertise</p>
            }
            contentText={
              <p className="text-primary">Pediatrics, gastrointestinal disorders, and allergic diseases in children from infancy to adolescence</p>}>
            <FaGraduationCap size={38} className="" />
          </ExperienceCard>
          <ExperienceCard
            headerText={
              <p className="text-h6 font-medium text-primary">Awards</p>
            }
            contentText={
              <>
                <p className="text-primary">Hippocrates Order (2025)</p>
                <p className="text-primary">Altyn Dariger (2024)</p>
                <p className="text-primary">Doctor of The Year (Consilim Medicum, 2018)</p>
              </>
            }>
            <FaMedal size={38} className="" />
          </ExperienceCard>
        </div>
      </PageContainer>
    </section>
  );
}