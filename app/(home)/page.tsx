import Background from './components/background';
import HomeContent from './components/home-content';
import { Navbar } from './components/nav';
import Footer from './components/footer';

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
