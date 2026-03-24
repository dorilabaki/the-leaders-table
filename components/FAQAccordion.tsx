'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '@/lib/content';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <StaggerContainer className="space-y-4">
      {faqItems.map((item, index) => (
        <StaggerItem key={index}>
          <div className="border border-navy-200 rounded-xl overflow-hidden">
            {/* W3C accordion pattern: heading wraps the button */}
            <h2>
              <button
                id={`faq-trigger-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-navy-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="font-heading text-lg font-bold text-navy-900 pr-4">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-navy-500"
                  aria-hidden="true"
                >
                  <ChevronDownIcon className="w-5 h-5" />
                </motion.span>
              </button>
            </h2>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 text-navy-600 leading-relaxed border-t border-navy-100 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
