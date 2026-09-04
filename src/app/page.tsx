import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Benefits from '@/components/Benefits';
import WhyZeetreat from '@/components/WhyZeetreat';
import Ingredients from '@/components/Ingredients';
import HowToUse from '@/components/HowToUse';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ZEETREAT | Premium Herbal Hair Oil',
  description: 'Experience the transformative power of ZEETREAT Herbal Hair Oil. Strengthens roots, nourishes scalp, and promotes healthy hair growth with premium natural ingredients.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Benefits />
      <WhyZeetreat />
      <Ingredients />
      <HowToUse />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}
