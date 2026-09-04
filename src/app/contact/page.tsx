import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact ZEETREAT | Get in Touch',
  description: 'Contact ZEETREAT with your questions, feedback, or inquiries about our premium herbal hair oil.',
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 text-center">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-12 text-center">Have questions about ZEETREAT? We'd love to hear from you.</p>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
