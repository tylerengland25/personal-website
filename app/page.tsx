import Background from './home/components/background';
import HomeContent from './home/components/home-content';
import { Navbar } from './home/components/nav';
import Footer from './home/components/footer';

export default function Page() {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col">
      <Background imagePath="/backgrounds/desk-setup-dark.webp" />
      <Navbar />
      <div className="flex-1 relative">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}
