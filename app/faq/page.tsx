'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems, siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import SchemaOrg, { BreadcrumbSchema } from '@/components/SchemaOrg';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SchemaOrg type="FAQPage" data={faqSchema} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container-wide">
          <AnimatedDiv className="max-w-3xl">
            <p className="text-accent-400 font-medium mb-4 uppercase tracking-wide text-sm">FAQ</p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Common questions about leadership, management, and professional development.
              Get answers to help you on your leadership journey.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* FAQ Accordion */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-narrow">
          <StaggerContainer className="space-y-4">
            {faqItems.map((item, index) => (
              <StaggerItem key={index}>
                <div className="border border-navy-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-navy-50 transition-colors"
                  >
                    <h2 className="font-heading text-lg font-bold text-navy-900 pr-4">
                      {item.question}
                    </h2>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-navy-400"
                    >
                      <ChevronDownIcon className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
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
        </div>
      </AnimatedSection>

      {/* Still Have Questions */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-navy-600 text-lg mb-8 max-w-xl mx-auto">
            Connect with us on LinkedIn or explore our comprehensive guides and resources.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Connect on LinkedIn
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg border border-navy-200 hover:bg-navy-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
