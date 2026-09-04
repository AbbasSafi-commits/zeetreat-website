'use client';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Placeholder Customer',
      location: 'Location',
      rating: 5,
      text: 'Replace with real customer testimonials. This is a placeholder that demonstrates the testimonial layout and styling.',
      image: '👤',
    },
    {
      name: 'Placeholder Customer',
      location: 'Location',
      rating: 5,
      text: 'Replace with real customer testimonials. This is a placeholder that demonstrates the testimonial layout and styling.',
      image: '👤',
    },
    {
      name: 'Placeholder Customer',
      location: 'Location',
      rating: 5,
      text: 'Replace with real customer testimonials. This is a placeholder that demonstrates the testimonial layout and styling.',
      image: '👤',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Customer Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from people using ZEETREAT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{testimonial.image}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4 text-gold-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-amber-50 border-l-4 border-gold-600 p-6 rounded-r-lg"
        >
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> These are placeholder testimonials. When you provide real customer testimonials, they will replace these placeholders automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;