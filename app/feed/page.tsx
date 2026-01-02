import { Metadata } from 'next';
import Link from 'next/link';
import { articles, guides, siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { BreadcrumbSchema } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Feed',
  description: 'Latest leadership content from The Leader\'s Table. Articles, guides, and insights organized by date.',
  alternates: {
    canonical: '/feed/',
  },
};

export default function FeedPage() {
  // Combine and sort all content by date
  const allContent = [
    ...articles.map((a) => ({ ...a, type: 'article' as const, href: `/resources/${a.slug}/` })),
    ...guides.map((g) => ({ ...g, type: 'guide' as const, href: `/guides/${g.slug}/` })),
  ].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Feed', url: '/feed/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container-wide">
          <AnimatedDiv className="max-w-3xl">
            <p className="text-accent-400 font-medium mb-4 uppercase tracking-wide text-sm">Feed</p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-white">
              Latest Content
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              All our leadership content in chronological order.
              Stay up to date with the latest insights and guides.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Content Feed */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-wide">
          <StaggerContainer className="space-y-6">
            {allContent.map((item) => (
              <StaggerItem key={`${item.type}-${item.slug}`}>
                <Link
                  href={item.href}
                  className="group block bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all border border-navy-100"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                    <div className="lg:w-32 flex-shrink-0">
                      <time className="text-navy-500 text-sm">
                        {new Date(item.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          item.type === 'guide'
                            ? 'bg-accent-100 text-accent-600'
                            : 'bg-navy-100 text-navy-600'
                        }`}>
                          {item.type === 'guide' ? 'Guide' : 'Article'}
                        </span>
                        <span className="text-accent-500 text-sm font-medium">{item.category}</span>
                        <span className="text-navy-400 text-sm">{item.readTime}</span>
                      </div>
                      <h2 className="font-heading text-xl font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-navy-600 line-clamp-2">{item.excerpt}</p>
                    </div>
                    <div className="lg:w-24 flex-shrink-0">
                      <span className="text-accent-500 font-medium inline-flex items-center">
                        Read
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

      {/* LinkedIn CTA */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">
            Get Daily Leadership Tips
          </h2>
          <p className="text-navy-600 text-lg mb-8 max-w-xl mx-auto">
            Follow us on LinkedIn for daily insights delivered straight to your feed.
            Join {siteConfig.followers}+ professionals.
          </p>
          <a
            href={siteConfig.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
          >
            <LinkedInIcon className="mr-2 w-5 h-5" />
            Follow on LinkedIn
          </a>
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

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
