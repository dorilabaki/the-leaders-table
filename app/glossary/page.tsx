import { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { BreadcrumbSchema } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Leadership Glossary',
  description: 'Essential leadership terms and concepts explained. Your reference guide to key leadership vocabulary and frameworks.',
  alternates: {
    canonical: '/glossary/',
  },
};

export default function GlossaryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Glossary', url: '/glossary/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container-wide">
          <AnimatedDiv className="max-w-3xl">
            <p className="text-accent-400 font-medium mb-4 uppercase tracking-wide text-sm">Glossary</p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-white">
              Leadership Glossary
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Essential leadership terms and concepts explained.
              Your reference guide to the vocabulary of effective leadership.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Alphabet Navigation */}
      <AnimatedSection className="py-6 bg-white border-b border-navy-200 sticky top-16 lg:top-20 z-40">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 justify-center">
            {['D', 'E', 'O', 'P', 'S'].map((letter) => (
              <a
                key={letter}
                href={`#${letter.toLowerCase()}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-100 text-navy-700 font-medium hover:bg-navy-900 hover:text-white transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Terms List */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-wide">
          <StaggerContainer className="space-y-6">
            {glossaryTerms.map((term) => (
              <StaggerItem key={term.term} id={term.title[0].toLowerCase()}>
                <Link
                  href={`/glossary/${term.term}/`}
                  className="group block bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-navy-100"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3 group-hover:text-accent-600 transition-colors">
                        {term.title}
                      </h2>
                      <p className="text-navy-600 text-lg">{term.definition}</p>
                    </div>
                    <div className="lg:w-32 flex items-center">
                      <span className="text-accent-500 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
                        Learn more
                        <ArrowRightIcon className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">
            Want to Go Deeper?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Explore our comprehensive guides for in-depth coverage of leadership topics.
          </p>
          <Link
            href="/guides/"
            className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
          >
            Browse Guides
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
