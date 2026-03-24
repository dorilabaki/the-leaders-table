import { Metadata } from 'next';
import Link from 'next/link';
import { faqItems, siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv } from '@/components/AnimatedSection';
import SchemaOrg, { BreadcrumbSchema } from '@/components/SchemaOrg';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about leadership, management, and professional development. Get answers to help you on your leadership journey.',
  alternates: {
    canonical: '/faq/',
  },
};

export default function FAQPage() {
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
          <FAQAccordion />
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
