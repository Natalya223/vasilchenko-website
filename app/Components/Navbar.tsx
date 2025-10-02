import PageContainer from "./PageContainer"

export default function Navbar() {
  return (
    <header className="fixed w-full z-1 bg-background">
      <PageContainer>
        <nav className="">
          <ul className="min-h-20 flex items-center gap-36">
            <li className="grow"><a href="/" className="text-h5 font-semibold">Dr. Vasilchenko</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Testimonials</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">C.V.</a></li>
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
}