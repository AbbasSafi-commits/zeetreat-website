'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const Product3D = lazy(() => import('./Product3D').catch(() => ({
  default: () => (
    <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center">
      <p className="text-gray-500">3D Product Viewer</p>
    </div>
  ),
})));

const ProductShowcase = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            The ZEETREAT Bottle
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium formulation in elegant packaging. 200ml of pure herbal goodness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Product */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Suspense fallback={<div className="w-full h-96 bg-gray-100 rounded-xl" />}>
              <Product3D />
            </Suspense>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">ZEETREAT Herbal Hair Oil</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Crafted with traditional herbal wisdom and modern cosmetic science. Each bottle contains a powerful blend of natural ingredients scientifically selected for their hair care benefits.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Strengthens Hair Roots</h4>
                  <p className="text-gray-600">Deep nourishment from root to tip</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Nourishes the Scalp</h4>
                  <p className="text-gray-600">Promotes a healthy scalp environment</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Supports Hair Growth</h4>
                  <p className="text-gray-600">Healthy growth cycle support</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-600 mb-4">200ml | Paraben Free | Mineral Oil Free | Silicone Free</p>
              <button className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Order Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;