import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { BreadcrumbSchema } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name} - your go-to source for practical and inspiring leadership tips. Join ${siteConfig.followers}+ professionals on their leadership journey.`,
  alternates: {
    canonical: '/about/',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Practical Wisdom',
      description: 'Every piece of content is actionable. We share insights you can apply today, not abstract theories.',
    },
    {
      title: 'Curated Excellence',
      description: 'We distill the best thinking from experienced executives, coaches, and leadership experts.',
    },
    {
      title: 'Inclusive Leadership',
      description: 'Great leadership comes in many forms. We celebrate diverse approaches and perspectives.',
    },
    {
      title: 'Continuous Growth',
      description: 'Leadership is a lifelong journey. We support you at every stage of your development.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container-wide">
          <AnimatedDiv className="max-w-3xl">
            <p className="text-accent-400 font-medium mb-4 uppercase tracking-wide text-sm">About Us</p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-white">
              Your Partner in Leadership Excellence
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {siteConfig.tagline} We believe great leadership can be learned,
              practiced, and refined. That&apos;s why we&apos;re here.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Mission */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-navy-600 leading-relaxed mb-8">
              To democratize leadership wisdom by making the insights of experienced
              executives and coaches accessible to everyone who wants to lead better.
            </p>
            <p className="text-lg text-navy-600 leading-relaxed">
              Whether you&apos;re a first-time manager or a seasoned executive, we curate
              the most practical frameworks, strategies, and mindsets to help you
              succeed in your leadership journey.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection className="py-16 bg-navy-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-2">
                {siteConfig.followers}+
              </p>
              <p className="text-navy-600">LinkedIn Followers</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-2">
                Daily
              </p>
              <p className="text-navy-600">Fresh Content</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-2">
                100+
              </p>
              <p className="text-navy-600">Expert Sources</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              What We Believe
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Our content is guided by these core principles.
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 bg-navy-50 rounded-xl border border-navy-100">
                  <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy-600">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* What We Cover */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              What We Cover
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Leadership Development', 'Executive Coaching', 'Team Management', 'Strategic Thinking', 'Communication Skills', 'Decision Making', 'Emotional Intelligence', 'Organizational Culture'].map((topic) => (
              <div key={topic} className="bg-white p-6 rounded-lg border border-navy-100 text-center">
                <p className="font-medium text-navy-900">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section-padding bg-navy-900 text-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Elevate Your Leadership?
          </h2>
          <p className="text-navy-300 text-lg mb-8 max-w-xl mx-auto">
            Join our growing community of professionals who are committed to
            becoming better leaders every day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-100 transition-colors"
            >
              Follow on LinkedIn
            </a>
            <Link
              href="/resources/"
              className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-400 transition-colors"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
