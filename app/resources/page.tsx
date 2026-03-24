import { Metadata } from 'next';
import { getPublishedArticles, siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv } from '@/components/AnimatedSection';
import { BreadcrumbSchema } from '@/components/SchemaOrg';
import ResourcesFilter from '@/components/ResourcesFilter';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Explore our collection of leadership articles, tips, and insights. Practical wisdom for managers and executives.',
  alternates: {
    canonical: '/resources/',
  },
};

export default function ResourcesPage() {
  const articles = getPublishedArticles();
  const categories = [...new Set(articles.map((a) => a.category))];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Resources', url: '/resources/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container-wide">
          <AnimatedDiv className="max-w-3xl">
            <p className="text-accent-400 font-medium mb-4 uppercase tracking-wide text-sm">Resources</p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-white">
              Leadership Articles &amp; Insights
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Practical tips and strategies from our collection of leadership content.
              Each article is designed to help you lead better, starting today.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Category Filter + Articles Grid (client component) */}
      <ResourcesFilter articles={articles} categories={categories} />

      {/* CTA */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">
            Want More Leadership Insights?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Follow us on LinkedIn for daily tips and join {siteConfig.followers}+ professionals.
          </p>
          <a
            href={siteConfig.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
          >
            Follow on LinkedIn
          </a>
        </div>
      </AnimatedSection>
    </>
  );
}
