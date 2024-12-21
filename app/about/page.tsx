import Background from '../(home)/components/background';
import { Navbar } from '../(home)/components/nav';
import Footer from '../(home)/components/footer';
import Image from 'next/image';
import MobileNav from '../(home)/components/mobile-nav';

export const metadata = {
  title: 'About',
};

export default function About() {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col">
      <Background imagePath="/backgrounds/desk-setup-dark.webp" />
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="lg:block hidden">
          <Navbar />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="fixed top-[150px] lg:top-[200px] bottom-16 left-0 right-0 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 relative pb-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4 text-white">About</h1>
            </div>
            <div className="w-full bg-gray-900/80 backdrop-blur-md shadow-xl shadow-black/50 rounded-lg p-4 lg:p-8 border border-gray-800/50">
              <div className="relative w-full h-64 lg:w-64 lg:float-right lg:ml-8 mb-6">
                <Image
                  src="/photos/profile-photo.jpeg"
                  alt="Profile picture"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="prose prose-neutral dark:prose-invert font-roboto-flex max-w-none">
                <div className="space-y-6 text-gray-200">
                  <p>
                    Tyler is a data scientist and software developer
                    specializing in sports analytics and predictive modeling. A
                    Computer Science graduate from California Polytechnic State
                    University San Luis Obispo, he discovered his passion for
                    sports analytics early on, successfully developing NFL and
                    NBA player prop prediction models that funded his college
                    expenses.
                  </p>
                  <p>
                    His professional journey began at PricewaterhouseCoopers,
                    where he built data solutions and business applications.
                    Following his passion for sports analytics, he then joined
                    Swish Analytics, where he currently supports football
                    products, manages machine learning infrastructure, and leads
                    documentation efforts.
                  </p>
                  <p>
                    With over 5 years of experience spanning consulting and
                    startups, Tyler leverages advanced machine learning
                    techniques and distributed computing to develop innovative
                    solutions. He has successfully implemented various projects
                    ranging from real-time analytics dashboards to sophisticated
                    prediction models that have helped organizations make
                    data-driven decisions.
                  </p>
                  <p>
                    Beyond his technical capabilities, Tyler is passionate about
                    making complex data accessible and meaningful. He combines
                    his deep understanding of sports analytics with modern
                    software development practices to create intuitive solutions
                    that bridge the gap between raw data and actionable
                    strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
}
