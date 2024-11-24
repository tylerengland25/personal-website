import ContactForm from './components/contact-form';
import { socialLinks } from '../config';

export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Have a question or want to work together? Feel free to reach out using
          the form below or email me at{' '}
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
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
  );
}
