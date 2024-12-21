import Background from '../(home)/components/background';
import ContactForm from './components/contact-form';
import { socialLinks } from '../config';
import { Navbar } from '../(home)/components/nav';
import Footer from '../(home)/components/footer';
import TypeWriter from '../components/type-writer';

export default function Contact() {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col">
      <Background imagePath="/backgrounds/desk-setup-dark.webp" />
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <Navbar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="fixed top-[200px] left-0 right-0 z-40">
          <section className="max-w-6xl mx-auto px-4 relative">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4 text-white">
                Get in Touch
              </h1>
              <TypeWriter
                text={`Have a question or want to work together? Feel free to reach out using the form below or email me at [${socialLinks.email}](mailto:${socialLinks.email}).`}
                className="text-lg text-gray-200"
                showCursor={true}
              />
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
}
