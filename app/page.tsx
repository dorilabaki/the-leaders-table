import Link from 'next/link';
import { siteConfig, pillars, articles, guides } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        <div className="container-wide relative py-24 lg:py-32">
          <AnimatedDiv className="max-w-3xl">
            <div className="mb-8">
              <img
                src="/logo.jpeg"
                alt="The Leader's Table"
                className="w-20 h-20 rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-accent-400 font-medium mb-4 tracking-wide uppercase text-sm">
              Leadership Insights for Ambitious Professionals
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Pull Up a Chair.</span>
              <br />
              <span className="text-accent-400">The Best Conversations</span>
              <br />
              <span className="text-white">Happen Here.</span>
            </h1>
            <p className="text-xl text-navy-200 mb-8 leading-relaxed max-w-2xl">
              Your go-to source for practical and inspiring leadership tips.
              Join {siteConfig.followersAggregated} {siteConfig.followersTagline}.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/guides/"
                className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-400 transition-colors"
              >
                Explore Guides
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                <LinkedInIcon className="mr-2 w-5 h-5" />
                Follow Us
              </a>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Social Proof */}
      <AnimatedSection className="bg-white border-b border-navy-200">
        <div className="container-wide py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-heading font-bold text-navy-900">{siteConfig.followersAggregated}</p>
              <p className="text-navy-600 text-sm">{siteConfig.followersTagline}</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-navy-200" />
            <div>
              <p className="text-3xl lg:text-4xl font-heading font-bold text-navy-900">Daily</p>
              <p className="text-navy-600 text-sm">Leadership Insights</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-navy-200" />
            <div>
              <p className="text-3xl lg:text-4xl font-heading font-bold text-navy-900">Expert</p>
              <p className="text-navy-600 text-sm">Curated Content</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Topic Pillars */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Leadership Topics We Cover
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Practical wisdom across the core competencies that define exceptional leaders.
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-navy-100">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    pillar.color === 'accent' ? 'bg-accent-100 text-accent-500' : 'bg-navy-100 text-navy-600'
                  }`}>
                    <PillarIcon name={pillar.icon} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-navy-600">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Featured Guides */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                Comprehensive Guides
              </h2>
              <p className="text-navy-600 text-lg max-w-2xl">
                Deep-dive resources to transform your leadership practice.
              </p>
            </div>
            <Link
              href="/guides/"
              className="hidden md:inline-flex items-center text-accent-500 font-medium hover:text-accent-600 transition-colors"
            >
              View All
              <ArrowRightIcon className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <AnimatedDiv key={guide.slug} delay={index * 0.1}>
                <Link
                  href={`/guides/${guide.slug}/`}
                  className="group block bg-navy-50 rounded-xl p-8 hover:bg-navy-100 transition-colors border border-navy-100"
                >
                  <span className="inline-block px-3 py-1 bg-accent-100 text-accent-600 text-sm font-medium rounded-full mb-4">
                    {guide.category}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-3 group-hover:text-accent-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-navy-600 mb-4">{guide.excerpt}</p>
                  <span className="text-sm text-navy-500">{guide.readTime}</span>
                </Link>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Latest Articles */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-navy-600 text-lg max-w-2xl">
                Fresh insights to sharpen your leadership skills.
              </p>
            </div>
            <Link
              href="/resources/"
              className="hidden md:inline-flex items-center text-accent-500 font-medium hover:text-accent-600 transition-colors"
            >
              View All
              <ArrowRightIcon className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <StaggerItem key={article.slug}>
                <Link
                  href={`/resources/${article.slug}/`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-navy-100"
                >
                  <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                    <span className="text-white/20 font-heading text-6xl font-bold">TL</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-accent-500 text-sm font-medium">{article.category}</span>
                      <span className="text-navy-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-navy-600 text-sm line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="md:hidden text-center mt-8">
            <Link
              href="/resources/"
              className="inline-flex items-center text-accent-500 font-medium"
            >
              View All Articles
              <ArrowRightIcon className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection className="section-padding bg-navy-900 text-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4 text-white">
            Join the Conversation
          </h2>
          <p className="text-navy-300 text-lg mb-8 max-w-xl mx-auto">
            Get weekly leadership insights delivered straight to your inbox.
            Join {siteConfig.followersAggregated} {siteConfig.followersTagline}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <button
              type="button"
              className="px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-400 transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p className="text-navy-400 text-sm mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </AnimatedSection>

      {/* LinkedIn CTA */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 lg:p-12 text-white text-center">
            <LinkedInIcon className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4 text-white">
              Follow Us on LinkedIn
            </h2>
            <p className="text-navy-300 text-lg mb-8 max-w-xl mx-auto">
              Join {siteConfig.followersAggregated} {siteConfig.followersTagline} getting daily
              tips, frameworks, and insights from experienced executives.
            </p>
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-100 transition-colors"
            >
              <LinkedInIcon className="mr-2 w-5 h-5" />
              Follow The Leader&apos;s Table
            </a>
          </div>
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

function PillarIcon({ name }: { name: string }) {
  switch (name) {
    case 'compass':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case 'users':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'target':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'message':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    default:
      return null;
  }
}
