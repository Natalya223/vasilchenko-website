import PageContainer from "./PageContainer";

export default function Footer() {
  return (
    <footer className="bg-primary text-background">
      <PageContainer>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-24">
          <div>
            <ul>
              <li><p className="text-h6 mb-2 font-medium">Navigation</p></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Research</a></li>
              <li><a href="/">Awards</a></li>
              <li><a href="/">C.V.</a></li>
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
      <div className="flex justify-center pb-2">
        <p className="text-xs">Natalia Vasilchenko © {new Date().getFullYear()} • Designed by Yaroslav Stupkov</p>
      </div>
    </footer>
  );
}