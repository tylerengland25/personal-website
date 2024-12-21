import Background from './components/background';
import HomeContent from './components/home-content';
import { Navbar } from './components/nav';
import Footer from './components/footer';
import MobileNav from './components/mobile-nav';

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden relative flex flex-col">
      <Background imagePath="/backgrounds/desk-setup-dark.webp" />
      <div className="lg:block hidden">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className="flex-1 relative">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}
