'use client';

import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gold-50 to-sage-50 border-t-2 border-gold-200">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of people who are experiencing healthier, stronger, more beautiful hair with ZEETREAT premium herbal oil.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg">
              Order Now
            </button>
            <button className="px-10 py-4 border-2 border-gold-600 text-gold-600 rounded-lg font-semibold hover:bg-gold-50 transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-8">
            Free shipping on orders over a certain amount • 30-day satisfaction guarantee • Authentic ZEETREAT
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;