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
          <ExperienceCard headerText="Experience" contentText="25+ years in cardiovascular medicine, treating thousands of patients worldwide">
            <FaUserDoctor size={38} className="text-background" />
          </ExperienceCard>
          <ExperienceCard headerText="Research" contentText="Author of 60+ peer-reviewed publications, keynote speaker at global conferences">
            <FaMicroscope size={38} className="text-background" />
          </ExperienceCard>
          <ExperienceCard headerText="Education" contentText="Harvard Medical School alumnus, advanced training in interventional cardiology">
            <FaGraduationCap size={38} className="text-background" />
          </ExperienceCard>
          <ExperienceCard headerText="Awards" contentText="Recipient of the National Award for Excellence in Cardiology (2022)">
            <FaMedal size={38} className="text-background" />
          </ExperienceCard>
        </div>
      </PageContainer>
    </section>
  );
}