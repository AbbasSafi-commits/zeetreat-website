import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About ZEETREAT | Premium Hair Care',
  description: 'Learn about ZEETREAT mission, values, and commitment to natural hair care excellence.',
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">About ZEETREAT</h1>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                ZEETREAT is a premium herbal hair oil brand dedicated to providing natural, effective solutions for healthy hair care.
              </p>
              <p>
                Our formulation combines traditional herbal wisdom with modern cosmetic science to deliver a product that strengthens roots, nourishes the scalp, and promotes healthy hair growth.
              </p>
              <p>
                Every ingredient in ZEETREAT is carefully selected for its proven benefits in natural hair care, with no parabens, mineral oils, or silicones.
              </p>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mt-8">Our Commitment</h2>
              <p>
                We're committed to transparency, quality, and delivering genuine results through the power of nature's ingredients.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
