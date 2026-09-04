'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Premium Herbal Hair Oil
          </h1>
          <p className="text-2xl md:text-3xl text-gold-600 font-light mb-8">
            ZEETREAT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Strengthen roots. Nourish scalp. Promote healthy hair growth.
            <br />
            Pure herbal ingredients for beautiful, resilient hair.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Discover ZEETREAT
          </button>
          <button className="px-8 py-4 border-2 border-gold-600 text-gold-600 rounded-lg font-semibold hover:bg-gold-50 transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;