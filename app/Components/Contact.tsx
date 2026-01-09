import Link from "next/link";
import NavButton from "./NavButton";
import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact">
      <div className="relative">
        <Image src={"/images/blob.png"} alt="An image of blue blob decoration" width={368} height={627} className="absolute left-[-50px] bottom-[-400px] rotate-180 -z-1" />
        <PageContainer style="z-1">
          <SectionHeader>Contact</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2056.707651979036!2d76.86655303761654!3d43.19640275166553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836863451c0eed%3A0x1b8312cb1af0f5a0!2z0LzQvdC-0LPQvtC_0YDQvtGE0LjQu9GM0L3Ri9C5INC80LXQtNC40YbQuNC90YHQutC40Lkg0YbQtdC90YLRgCBIZWFsdGhDaXR5!5e0!3m2!1sru!2skz!4v1759507200188!5m2!1sru!2skz" loading="lazy" className="rounded-2xl w-full max-w-[520px] min-h-[260px] h-full"></iframe>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <ul>
                  <li><p className="text-h6 mb-2 font-medium">Address</p></li>
                  <li><p>ул. Мусабаева, д. 8, г. Алматы, Казахстан</p></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><p className="text-h6 mb-2 font-medium">Phone number</p></li>
                  <li><p>+7 (706) 698 55 68</p></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><p className="text-h6 mb-2 font-medium">E-mail</p></li>
                  <li><p>nonevasilchenko@gmail.com</p></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><p className="text-h6 mb-2 font-medium">Work hours</p></li>
                  <li><p>9:00 - 17:00</p></li>
                </ul>
              </div>
              <div className="mt-10">
                <NavButton href="https://healthcity.kz/doctors-list/vasilcenko-natalia-vladimirovna" icon={
                  <FaArrowUpRightFromSquare />}>
                  Book an appointment</NavButton>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}