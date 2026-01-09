import { FaUserDoctor, FaMicroscope, FaGraduationCap, FaMedal } from "react-icons/fa6";
import ExperienceCard from "./ExperienceCard";
import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

export default function Experience() {
  return (
    <section>
      <div className="relative overflow-x-clip">
        <Image src={"/images/line.png"} alt="An image of blue blob decoration" width={479} height={738} className="absolute -left-18 -z-1" />
        <Image src={"/images/line.png"} alt="An image of blue blob decoration" width={479} height={738} className="absolute -bottom-60 rotate-180 -right-18 -z-1" />
        <PageContainer style="">
          <SectionHeader>About Me</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExperienceCard
              headerText={
                <p className="text-h6 font-medium group-hover:text-white">Experience</p>
              }
              contentText={
                <p className="group-hover:text-white">Over 20 years of clinical work in pediatrics, gastroenterology, and allergology</p>
              }>
              <FaUserDoctor size={38} className="" />
            </ExperienceCard>
            <ExperienceCard
              headerText={
                <p className="text-h6 font-medium group-hover:text-white">Publications</p>
              } contentText={
                <p className="group-hover:text-white">Author of clinical articles in pediatric gastroenterology, allergy medicine, and pediatric care</p>
              }>
              <FaMicroscope size={38} className="" />
            </ExperienceCard>
            <ExperienceCard
              headerText={
                <p className="text-h6 font-medium group-hover:text-white">Expertise</p>
              }
              contentText={
                <p className="group-hover:text-white">Pediatrics, gastrointestinal disorders, and allergic diseases in children from infancy to adolescence</p>}>
              <FaGraduationCap size={38} className="" />
            </ExperienceCard>
            <ExperienceCard
              headerText={
                <p className="text-h6 font-medium group-hover:text-white">Awards</p>
              }
              contentText={
                <>
                  <p className="group-hover:text-white">Hippocrates Order (2025)</p>
                  <p className="group-hover:text-white">Altyn Dariger (2024)</p>
                  <p className="group-hover:text-white">Doctor of The Year (Consilim Medicum, 2018)</p>
                </>
              }>
              <FaMedal size={38} className="" />
            </ExperienceCard>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}