'use client';

import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      title: 'Strengthens Hair Roots',
      description: 'Deep herbal nourishment penetrates the scalp to strengthen hair from the root, promoting resilient growth.',
      icon: '💪',
    },
    {
      title: 'Reduces Hair Fall',
      description: 'Our formula is designed to help reduce hair fall by fortifying the hair shaft and supporting scalp health.',
      icon: '🛡️',
    },
    {
      title: 'Nourishes Scalp',
      description: 'Rich herbal ingredients create optimal scalp conditions for healthy, beautiful hair.',
      icon: '🌿',
    },
    {
      title: 'Promotes Hair Growth',
      description: 'Support your hair growth cycle with potent natural ingredients that nurture every strand.',
      icon: '✨',
    },
    {
      title: 'Suitable for All Hair Types',
      description: 'Gentle yet effective formula works beautifully on all hair types and textures.',
      icon: '👥',
    },
    {
      title: 'Natural & Pure',
      description: 'No parabens, mineral oils, or silicones. Pure herbal goodness in every bottle.',
      icon: '🍃',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Why Choose ZEETREAT?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proven benefits backed by carefully selected herbal ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;