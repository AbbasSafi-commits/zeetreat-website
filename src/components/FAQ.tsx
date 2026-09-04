'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How often should I use ZEETREAT?',
      answer: 'For optimal results, use ZEETREAT 2-3 times per week. You can adjust frequency based on your hair condition and personal preference.',
    },
    {
      question: 'Is ZEETREAT suitable for all hair types?',
      answer: 'Yes, ZEETREAT is formulated to be gentle yet effective for all hair types, including straight, wavy, curly, and coily hair.',
    },
    {
      question: 'Can I use ZEETREAT on colored hair?',
      answer: 'ZEETREAT is safe for colored hair. However, always do a patch test first if you have concerns, and ensure your hair is well-moisturized.',
    },
    {
      question: 'How long does one bottle last?',
      answer: 'One 200ml bottle typically lasts 8-12 weeks with regular 2-3 times weekly use, depending on hair length and thickness.',
    },
    {
      question: 'When will I see results?',
      answer: 'Many users notice improved hair quality within 2-4 weeks of regular use. For significant results, consistent use over 8-12 weeks is recommended.',
    },
    {
      question: 'Are there any side effects?',
      answer: 'ZEETREAT is made from natural herbal ingredients and is generally safe. As with any product, do a patch test first if you have sensitive skin.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Have questions? We're here to help</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-gold-300 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-gold-600 flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;