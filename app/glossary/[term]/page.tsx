import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { glossaryTerms, siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import SchemaOrg, { BreadcrumbSchema } from '@/components/SchemaOrg';

interface Props {
  params: Promise<{ term: string }>;
}

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    term: term.term,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term } = await params;
  const glossaryTerm = glossaryTerms.find((t) => t.term === term);

  if (!glossaryTerm) {
    return { title: 'Term Not Found' };
  }

  return {
    title: `${glossaryTerm.title} - Leadership Glossary`,
    description: glossaryTerm.definition,
    alternates: {
      canonical: `/glossary/${term}/`,
    },
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term } = await params;
  const glossaryTerm = glossaryTerms.find((t) => t.term === term);

  if (!glossaryTerm) {
    notFound();
  }

  const relatedTerms = glossaryTerms.filter(
    (t) => glossaryTerm.relatedTerms?.includes(t.term) && t.term !== term
  );

  return (
    <>
      <SchemaOrg
        type="DefinedTerm"
        data={{
          name: glossaryTerm.title,
          description: glossaryTerm.definition,
          inDefinedTermSet: {
            '@type': 'DefinedTermSet',
            name: 'Leadership Glossary',
            url: `${siteConfig.url}/glossary/`,
          },
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Glossary', url: '/glossary/' },
          { name: glossaryTerm.title, url: `/glossary/${term}/` },
        ]}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16 lg:py-20">
        <div className="container-narrow">
          <AnimatedDiv>
            <Link
              href="/glossary/"
              className="inline-flex items-center text-navy-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Glossary
            </Link>
            <p className="text-accent-400 font-medium mb-4 uppercase tracking-wide text-sm">
              Leadership Term
            </p>
            <h1 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              {glossaryTerm.title}
            </h1>
          </AnimatedDiv>
        </div>
      </section>

      {/* Definition */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy-900">
            <h2>Definition</h2>
            <p className="text-xl text-navy-700 leading-relaxed">{glossaryTerm.definition}</p>

            {glossaryTerm.keyPrinciples && (
              <>
                <h2>Key Principles</h2>
                <ul>
                  {glossaryTerm.keyPrinciples.map((principle, index) => (
                    <li key={index}>{principle}</li>
                  ))}
                </ul>
              </>
            )}

            {glossaryTerm.examples && (
              <>
                <h2>Examples in Practice</h2>
                <ul>
                  {glossaryTerm.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Related Terms */}
      {relatedTerms.length > 0 && (
        <AnimatedSection className="section-padding bg-navy-50">
          <div className="container-wide">
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-8">
              Related Terms
            </h2>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTerms.map((related) => (
                <StaggerItem key={related.term}>
                  <Link
                    href={`/glossary/${related.term}/`}
                    className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-navy-100"
                  >
                    <h3 className="font-heading text-lg font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-navy-600 text-sm line-clamp-2">{related.definition}</p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>
      )}

      {/* CTA */}
      <AnimatedSection className="py-12 bg-white border-t border-navy-200">
        <div className="container-narrow">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading font-bold text-navy-900 mb-1">Want to learn more?</p>
              <p className="text-navy-600">Explore our guides for in-depth coverage.</p>
            </div>
            <Link
              href="/guides/"
              className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Browse Guides
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg>
  );
}
