import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Careers | ZEETREAT',
  description: 'Join the ZEETREAT team. We\'re looking for passionate people to help us grow.',
};

export default function DriverJobs() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Careers</h1>
            <p className="text-xl text-gray-600 mb-12">Coming soon. Join our team and help us deliver premium natural hair care.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
