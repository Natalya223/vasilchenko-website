import Link from "next/link";
import NavButton from "./NavButton";
import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section>
      <div className="relative">
        <img src="/images/blob.png" alt="blob" className="absolute left-[-50px] bottom-[-875px] rotate-180" />
      </div>
      <PageContainer>
        <SectionHeader>Contact</SectionHeader>
        <div className="grid grid-cols-2 gap-x-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2056.707651979036!2d76.86655303761654!3d43.19640275166553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836863451c0eed%3A0x1b8312cb1af0f5a0!2z0LzQvdC-0LPQvtC_0YDQvtGE0LjQu9GM0L3Ri9C5INC80LXQtNC40YbQuNC90YHQutC40Lkg0YbQtdC90YLRgCBIZWFsdGhDaXR5!5e0!3m2!1sru!2skz!4v1759507200188!5m2!1sru!2skz" loading="lazy" className="rounded-2xl w-full max-w-[520px] h-full"></iframe>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <ul>
                <li><p className="text-h6 mb-2 font-medium">Navigation</p></li>
                <li><Link href={"/"}></Link>About</li>
                <li><Link href={"/"}></Link>Research</li>
              </ul>
            </div>
            <div>
              <ul>
                <li><p className="text-h6 mb-2 font-medium">Address</p></li>
                <li><p>ул. Мусабаева, д. 8, г. Алматы, Казахстан</p></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><p className="text-h6 mb-2 font-medium">Contact</p></li>
                <li><p>8 800 555 35 35</p></li>
                <li><p>example@gmail.com</p></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><p className="text-h6 mb-2 font-medium">Work hours</p></li>
                <li><p>9:00 - 17:00</p></li>
              </ul>
            </div>
            <div className="mt-10">
              <NavButton href="https://healthcity.kz/doctors-list/vasilcenko-natalia-vladimirovna">Book an appointment</NavButton>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}