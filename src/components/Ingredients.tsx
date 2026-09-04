'use client';

import { motion } from 'framer-motion';

const Ingredients = () => {
  const ingredients = [
    {
      name: 'Phyllanthus emblica',
      benefit: 'Rich in Vitamin C, strengthens hair roots and promotes growth',
    },
    {
      name: 'Sesanum indicum',
      benefit: 'Nourishes scalp and hair follicles with essential fatty acids',
    },
    {
      name: 'Cocos nucifera',
      benefit: 'Deep moisturizing and scalp conditioning properties',
    },
    {
      name: 'Ricinus communis',
      benefit: 'Promotes hair growth and reduces hair fall',
    },
    {
      name: 'Jasminum officinale',
      benefit: 'Calming properties for scalp health',
    },
    {
      name: 'Syzygium aromaticum',
      benefit: 'Stimulates scalp circulation and promotes vitality',
    },
    {
      name: 'Nigella sativa',
      benefit: 'Rich nutrients support healthy hair growth',
    },
    {
      name: 'Tocopherols (Vitamin E)',
      benefit: 'Powerful antioxidant for hair and scalp protection',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Our Herbal Formula</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each ingredient is carefully selected for its proven hair care benefits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-gold-200 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 italic">{ingredient.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{ingredient.benefit}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold-50 to-sage-50 border border-gold-100 rounded-xl p-8 text-center"
        >
          <p className="text-lg text-gray-700 mb-4">
            <strong>Paraben Free • Mineral Oil Free • Silicone Free</strong>
          </p>
          <p className="text-gray-600">
            Pure herbal goodness. 200ml bottle. Made with traditional herbal wisdom and modern cosmetic science.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Ingredients;