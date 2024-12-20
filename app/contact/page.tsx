import Background from '../(home)/components/background';
import ContactForm from './components/contact-form';
import { socialLinks } from '../config';

export default function Contact() {
  return (
    <>
      <Background imagePath="/backgrounds/desk-setup-light.webp" />
      <section className="max-w-6xl mx-auto px-4 relative">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Get in Touch</h1>
          <p className="text-lg text-gray-200 mb-8">
            Have a question or want to work together? Feel free to reach out
            using the form below or email me at{' '}
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {socialLinks.email}
            </a>
            .
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
