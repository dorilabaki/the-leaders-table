import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides, siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv } from '@/components/AnimatedSection';
import SchemaOrg, { BreadcrumbSchema } from '@/components/SchemaOrg';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: {
      canonical: `/guides/${slug}/`,
    },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: 'article',
      publishedTime: guide.publishedAt,
      authors: [siteConfig.name],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const otherGuides = guides.filter((g) => g.slug !== slug);

  return (
    <>
      <SchemaOrg
        type="Article"
        data={{
          '@type': 'Article',
          headline: guide.title,
          description: guide.excerpt,
          datePublished: guide.publishedAt,
          author: {
            '@type': 'Organization',
            name: siteConfig.name,
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteConfig.url}/guides/${slug}/`,
          },
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides/' },
          { name: guide.title, url: `/guides/${slug}/` },
        ]}
      />

      {/* Guide Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16 lg:py-20">
        <div className="container-narrow">
          <AnimatedDiv>
            <Link
              href="/guides/"
              className="inline-flex items-center text-navy-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-accent-500/20 text-accent-400 font-medium rounded-full text-sm">
                {guide.category}
              </span>
              <span className="text-navy-300">{guide.readTime}</span>
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white">
              {guide.title}
            </h1>
            <p className="text-xl text-navy-200">{guide.excerpt}</p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Guide Content */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-narrow">
          <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-p:text-navy-700 prose-a:text-accent-600 prose-strong:text-navy-900 prose-li:text-navy-700 prose-table:text-sm">
            <div dangerouslySetInnerHTML={{ __html: formatContent(guide.content) }} />
          </article>
        </div>
      </AnimatedSection>

      {/* Share & Follow */}
      <AnimatedSection className="py-12 bg-navy-50 border-y border-navy-200">
        <div className="container-narrow">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading font-bold text-navy-900 mb-1">Found this guide helpful?</p>
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

      {/* Other Guides */}
      {otherGuides.length > 0 && (
        <AnimatedSection className="section-padding bg-white">
          <div className="container-wide">
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-8">
              More Guides
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {otherGuides.map((other) => (
                <Link
                  key={other.slug}
                  href={`/guides/${other.slug}/`}
                  className="group block bg-navy-50 rounded-xl p-8 hover:bg-navy-100 transition-colors border border-navy-100"
                >
                  <span className="inline-block px-3 py-1 bg-accent-100 text-accent-600 text-sm font-medium rounded-full mb-4">
                    {other.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-navy-900 mb-3 group-hover:text-accent-600 transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-navy-600">{other.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </>
  );
}

function formatContent(content: string): string {
  return content
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^\*\*(.+?)\*\*$/gm, '<p><strong>$1</strong></p>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- \[ \] (.+)$/gm, '<li class="flex items-start gap-2"><input type="checkbox" disabled class="mt-1.5" /><span>$1</span></li>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => {
      if (match.includes('checkbox')) {
        return `<ul class="list-none pl-0">${match}</ul>`;
      }
      return `<ul>${match}</ul>`;
    })
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hulo])/gm, '<p>')
    .replace(/(?<![>])$/gm, '</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hulo])/g, '$1')
    .replace(/(<\/[hulo][^>]*>)<\/p>/g, '$1')
    .replace(/---/g, '<hr />')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(Boolean).map((cell) => cell.trim());
      if (cells.every((c) => c.match(/^-+$/))) {
        return '';
      }
      const tag = cells[0].startsWith('**') ? 'th' : 'td';
      const row = cells.map((c) => `<${tag}>${c.replace(/\*\*/g, '')}</${tag}>`).join('');
      return `<tr>${row}</tr>`;
    });
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg>
  );
}
