import Link from "next/link";
import PageContainer from "./PageContainer";

export default function Footer() {
  return (
    <footer className="bg-primary text-background">
      <PageContainer>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-24">
          <div>
            <ul>
              <li><p className="text-h6 mb-2 font-medium">Navigation</p></li>
              <li><Link href={"/"}>About</Link></li>
              <li><Link href={"/"}>Research</Link></li>
              <li><Link href={"/"}>Awards</Link></li>
              <li><Link href={"/"}>C.V.</Link></li>
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
        </div>
      </PageContainer>
      <p className="text-xs text-center">Natalia Vasilchenko © {new Date().getFullYear()}</p>
      <p className="text-xs text-center pb-2">Designed by Yaroslav Stupkov</p>
    </footer>
  );
}