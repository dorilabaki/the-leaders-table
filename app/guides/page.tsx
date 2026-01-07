import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedGuides, siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { BreadcrumbSchema } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Comprehensive leadership guides for managers and executives. Deep-dive resources to transform your leadership practice.',
  alternates: {
    canonical: '/guides/',
  },
};

export default function GuidesPage() {
  const guides = getPublishedGuides();
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container-wide">
          <AnimatedDiv className="max-w-3xl">
            <p className="text-accent-400 font-medium mb-4 uppercase tracking-wide text-sm">Guides</p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-white">
              Comprehensive Leadership Guides
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Deep-dive resources designed to transform your leadership practice.
              Each guide provides actionable frameworks you can implement immediately.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Guides List */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-wide">
          <StaggerContainer className="space-y-8">
            {guides.map((guide) => (
              <StaggerItem key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}/`}
                  className="group block bg-white rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-lg transition-all border border-navy-100"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-600 text-sm font-medium rounded-full mb-4">
                        {guide.category}
                      </span>
                      <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy-900 mb-4 group-hover:text-accent-600 transition-colors">
                        {guide.title}
                      </h2>
                      <p className="text-navy-600 text-lg mb-4">{guide.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-navy-500">
                        <span>{guide.readTime}</span>
                        <span>•</span>
                        <span>Published {new Date(guide.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                    <div className="lg:w-48 flex items-center justify-center">
                      <span className="inline-flex items-center px-6 py-3 bg-navy-100 text-navy-700 font-medium rounded-lg group-hover:bg-navy-900 group-hover:text-white transition-colors">
                        Read Guide
                        <ArrowRightIcon className="ml-2 w-4 h-4" />
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
            Looking for Quick Tips?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Check out our articles for bite-sized leadership insights you can apply right away.
          </p>
          <Link
            href="/resources/"
            className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-400 transition-colors"
          >
            Browse Articles
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
