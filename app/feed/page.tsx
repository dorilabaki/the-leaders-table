import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/content';
import { feedPosts, feedConfig } from '@/lib/feed';
import AnimatedSection, { AnimatedDiv } from '@/components/AnimatedSection';
import { BreadcrumbSchema } from '@/components/SchemaOrg';
import FeedPostsList from '@/components/FeedPostsList';

export const metadata: Metadata = {
  title: 'LinkedIn Feed',
  description: `Top LinkedIn posts from ${feedConfig.pageName}. Leadership insights shared with ${feedConfig.followers} followers.`,
  alternates: {
    canonical: '/feed/',
  },
};

export default function FeedPage() {
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
              Top LinkedIn Posts
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed mb-8">
              {feedConfig.description} {feedConfig.followers} followers.
            </p>
            <a
              href={feedConfig.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-50 transition-colors"
            >
              <LinkedInIcon className="mr-2 w-5 h-5" aria-hidden="true" />
              Follow on LinkedIn
            </a>
          </AnimatedDiv>
        </div>
      </section>

      {/* LinkedIn Posts Feed */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-narrow">
          <FeedPostsList posts={feedPosts} />
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">
            Get Daily Leadership Tips
          </h2>
          <p className="text-navy-600 text-lg mb-8 max-w-xl mx-auto">
            Follow us on LinkedIn for daily insights delivered straight to your feed.
          </p>
          <a
            href={feedConfig.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
          >
            <LinkedInIcon className="mr-2 w-5 h-5" aria-hidden="true" />
            Follow {feedConfig.pageName}
          </a>
        </div>
      </section>
    </>
  );
}

function LinkedInIcon({ className, 'aria-hidden': ariaHidden }: { className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
