import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPublishedArticles, getArticleBySlug, siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv } from '@/components/AnimatedSection';
import SchemaOrg, { BreadcrumbSchema } from '@/components/SchemaOrg';
import { marked } from 'marked';

// Configure marked for synchronous parsing
marked.use({ async: false });

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/resources/${slug}/`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [siteConfig.name],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getPublishedArticles()
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 2);

  return (
    <>
      <SchemaOrg
        type="Article"
        data={{
          headline: article.title,
          description: article.excerpt,
          datePublished: article.publishedAt,
          author: {
            '@type': 'Organization',
            name: siteConfig.name,
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteConfig.url}/resources/${slug}/`,
          },
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Resources', url: '/resources/' },
          { name: article.title, url: `/resources/${slug}/` },
        ]}
      />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16 lg:py-20">
        <div className="container-narrow">
          <AnimatedDiv>
            <Link
              href="/resources/"
              className="inline-flex items-center text-navy-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent-400 font-medium">{article.category}</span>
              <span className="text-navy-400">•</span>
              <span className="text-navy-300">{article.readTime}</span>
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white">
              {article.title}
            </h1>
            <p className="text-xl text-navy-200">{article.excerpt}</p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Article Content */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-narrow">
          <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-h2:text-[1.75rem] prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-[1.375rem] prose-h3:mt-10 prose-h3:mb-4 prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3 prose-p:text-navy-700 prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-accent-600 prose-a:underline prose-a:underline-offset-2 prose-strong:text-navy-900 prose-strong:font-semibold prose-li:text-navy-700 prose-li:mb-3 prose-li:leading-[1.75] prose-ul:my-8 prose-ul:pl-6 prose-ul:list-disc prose-ol:my-8 prose-ol:pl-6 prose-ol:list-decimal prose-hr:my-12 prose-blockquote:my-8 prose-blockquote:pl-6 prose-blockquote:border-l-4 prose-blockquote:border-accent-500 prose-blockquote:italic prose-blockquote:text-navy-600 prose-code:text-accent-700 prose-code:bg-navy-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-navy-900 prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8">
            <div dangerouslySetInnerHTML={{ __html: marked.parse(article.content) as string }} />
          </article>
        </div>
      </AnimatedSection>

      {/* Share & Follow */}
      <AnimatedSection className="py-12 bg-navy-50 border-y border-navy-200">
        <div className="container-narrow">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading font-bold text-navy-900 mb-1">Enjoyed this article?</p>
              <p className="text-navy-600">Follow us for more leadership insights.</p>
            </div>
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <AnimatedSection className="section-padding bg-white">
          <div className="container-wide">
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/resources/${related.slug}/`}
                  className="group block bg-navy-50 rounded-xl p-6 hover:bg-navy-100 transition-colors border border-navy-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent-500 text-sm font-medium">{related.category}</span>
                    <span className="text-navy-400 text-sm">{related.readTime}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy-900 group-hover:text-accent-600 transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
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
