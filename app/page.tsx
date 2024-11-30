import Background from './home/components/background';
import HomeContent from './home/components/home-content';

export default function Page() {
  return (
    <>
      <Background imagePath="/backgrounds/desk-setup-light.webp" />
      <HomeContent />
    </>
  );
}
