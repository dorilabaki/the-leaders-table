import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedArticles, siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { BreadcrumbSchema } from '@/components/SchemaOrg';

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
              Leadership Articles & Insights
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Practical tips and strategies from our collection of leadership content.
              Each article is designed to help you lead better, starting today.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Categories */}
      <AnimatedSection className="py-8 bg-white border-b border-navy-200">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-navy-900 text-white text-sm font-medium rounded-full">
              All
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-navy-100 text-navy-700 text-sm font-medium rounded-full hover:bg-navy-200 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Articles Grid */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-wide">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <StaggerItem key={article.slug}>
                <Link
                  href={`/resources/${article.slug}/`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-navy-100 h-full"
                >
                  <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                    <span className="text-white/20 font-heading text-6xl font-bold">TL</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-accent-500 text-sm font-medium">{article.category}</span>
                      <span className="text-navy-400 text-sm">{article.readTime}</span>
                    </div>
                    <h2 className="font-heading text-lg font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-navy-600 text-sm line-clamp-3">{article.excerpt}</p>
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
