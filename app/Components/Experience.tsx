import { FaUserDoctor } from "react-icons/fa6";
import ExperienceCard from "./ExperienceCard";
import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <PageContainer>
      <SectionHeader>Experience</SectionHeader>
      <div className="grid grid-cols-4 gap-6">
        <ExperienceCard headerText="Experience" contentText="25+ years in cardiovascular medicine, treating thousands of patients worldwide">
          <FaUserDoctor size={42} className="text-background" />
        </ExperienceCard>
        <ExperienceCard headerText="Research" contentText="Author of 60+ peer-reviewed publications, keynote speaker at global conferences">
          <FaUserDoctor size={42} className="text-background" />
        </ExperienceCard>
        <ExperienceCard headerText="Education" contentText="Harvard Medical School alumnus, advanced training in interventional cardiology">
          <FaUserDoctor size={42} className="text-background" />
        </ExperienceCard>
        <ExperienceCard headerText="Awards" contentText="Recipient of the National Award for Excellence in Cardiology (2022)">
          <FaUserDoctor size={42} className="text-background" />
        </ExperienceCard>
      </div>
    </PageContainer>
  );
}