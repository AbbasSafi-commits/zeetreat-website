import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Services | ZEETREAT',
  description: 'Explore ZEETREAT services and how we support your hair care journey.',
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 mb-12">Coming soon. We're preparing comprehensive hair care solutions for you.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
