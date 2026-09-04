'use client';

import { motion } from 'framer-motion';

const HowToUse = () => {
  const steps = [
    {
      number: '01',
      title: 'Prepare',
      description: 'Part your hair into sections for even distribution',
    },
    {
      number: '02',
      title: 'Apply',
      description: 'Gently apply to scalp and massage through hair',
    },
    {
      number: '03',
      title: 'Massage',
      description: 'Massage the scalp for 5-10 minutes in circular motions',
    },
    {
      number: '04',
      title: 'Leave',
      description: 'Leave on for at least 30 minutes or overnight for best results',
    },
    {
      number: '05',
      title: 'Wash',
      description: 'Rinse thoroughly with warm water and shampoo',
    },
    {
      number: '06',
      title: 'Enjoy',
      description: 'Experience stronger, healthier, more beautiful hair',
    },
  ];

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
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">How to Use ZEETREAT</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps for optimal results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gold-50 to-sage-50 p-8 rounded-xl border border-gold-100 h-full">
                <div className="text-5xl font-serif font-bold text-gold-600 mb-4">{step.number}</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gold-400 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 border border-blue-200 p-8 rounded-xl"
        >
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> For best results, use 2-3 times per week. Individual results may vary. This is a cosmetic product and not intended to treat, diagnose, or cure any medical condition.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;