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

      {/* Story */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-narrow">
          <div className="text-center mb-8">
            <p className="text-accent-500 font-medium mb-2 uppercase tracking-wide text-sm">Our Story</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900">
              A Meeting Room Revelation
            </h2>
          </div>
          <div className="prose prose-lg text-navy-600 mx-auto">
            <p>
              In 2020, we sat through another meeting where a skilled manager struggled to get
              buy-in from their team. The strategy was sound. The data backed it up. But the
              room was unconvinced. It wasn&apos;t a knowledge problem. It was a leadership problem.
            </p>
            <p>
              That moment sparked a realization: most leadership advice is either too abstract
              (&quot;be authentic&quot;) or too tactical (&quot;use this email template&quot;). What&apos;s missing
              is the practical wisdom that sits in between. The frameworks that experienced
              executives use but rarely share.
            </p>
            <p>
              So we started collecting it. Interviewing leaders. Studying what actually works
              in boardrooms, one-on-ones, and crisis moments. Then sharing it daily on LinkedIn.
            </p>
            <p>
              {siteConfig.followers}+ professionals later, The Leader&apos;s Table has become
              a place where first-time managers and seasoned executives alike find the insights
              they need to lead with confidence.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection className="py-16 bg-white">
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

      {/* Testimonials */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-accent-500 font-medium mb-2 uppercase tracking-wide text-sm">Community Voices</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              What Leaders Are Saying
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Real insights from our LinkedIn community of 161,000+ leadership professionals.
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="p-6 bg-navy-50 rounded-xl border border-navy-100 h-full">
                <p className="text-navy-600 text-sm mb-4 italic">&quot;Absorbing chaos and cleaning up the environment is invisible work. Nobody applauds the meeting you canceled or the fight you took upstream so your team could stay focused. The leaders people remember are the ones who took heat above them so the work below them could get done.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-200 rounded-full flex items-center justify-center text-navy-700 font-bold text-sm">PA</div>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Pat Alacqua</p>
                    <p className="text-xs text-navy-500">Business Growth Strategist</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 bg-navy-50 rounded-xl border border-navy-100 h-full">
                <p className="text-navy-600 text-sm mb-4 italic">&quot;Creating a clear, supportive environment that shields the team from unnecessary friction is paramount. It&apos;s not about coddling, but about optimizing for performance by focusing on process and trust.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-200 rounded-full flex items-center justify-center text-navy-700 font-bold text-sm">MS</div>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Maria Sabio, CCHT</p>
                    <p className="text-xs text-navy-500">Clinical Hypnotherapist & Life Coach</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 bg-navy-50 rounded-xl border border-navy-100 h-full">
                <p className="text-navy-600 text-sm mb-4 italic">&quot;Your Team is responsible for the Customer and the Products. You are responsible for your People. As soon as you realize that, you will find the right balance.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-200 rounded-full flex items-center justify-center text-navy-700 font-bold text-sm">AB</div>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Andy Balbus</p>
                    <p className="text-xs text-navy-500">Leadership Coach</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 bg-navy-50 rounded-xl border border-navy-100 h-full">
                <p className="text-navy-600 text-sm mb-4 italic">&quot;Autonomy without context feels like abandonment, and support without trust feels suffocating. The leaders who make the biggest difference are the ones who reduce friction, create clarity, and absorb chaos.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-200 rounded-full flex items-center justify-center text-navy-700 font-bold text-sm">MV</div>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Mathruka Viswanath</p>
                    <p className="text-xs text-navy-500">Leadership Development Coach</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 bg-navy-50 rounded-xl border border-navy-100 h-full">
                <p className="text-navy-600 text-sm mb-4 italic">&quot;The people who truly want you to win don&apos;t just cheer—they quietly clear the path beside you.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-200 rounded-full flex items-center justify-center text-navy-700 font-bold text-sm">KA</div>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Khaled Alomari</p>
                    <p className="text-xs text-navy-500">Training Consultant</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 bg-navy-50 rounded-xl border border-navy-100 h-full">
                <p className="text-navy-600 text-sm mb-4 italic">&quot;A great leader will do most things without you even noticing. They don&apos;t do it for the recognition or the optics. They do it because they remember where they came from, they remember the leader that gave them the opportunity.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-200 rounded-full flex items-center justify-center text-navy-700 font-bold text-sm">SB</div>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Sean Brown</p>
                    <p className="text-xs text-navy-500">Founder & Executive Advisor</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Case Studies */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-accent-500 font-medium mb-2 uppercase tracking-wide text-sm">Leadership in Action</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Case Studies
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              How leaders at top organizations apply these principles to drive real results.
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="p-8 bg-white rounded-xl border border-navy-100 h-full">
                <p className="text-sm text-accent-500 font-medium mb-2">Brand Building</p>
                <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                  LeverBrands: Leading Through Visibility
                </h3>
                <p className="text-navy-600 mb-4">
                  LeverBrands, a personal branding agency, applied thought leadership principles
                  to help founders build executive presence on LinkedIn. By treating content
                  creation as a leadership tool rather than marketing, their clients saw an
                  average 40% increase in inbound opportunities within 6 months.
                </p>
                <p className="text-sm text-navy-500">
                  Key insight: Leaders who share openly attract opportunities.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-8 bg-white rounded-xl border border-navy-100 h-full">
                <p className="text-sm text-accent-500 font-medium mb-2">Transformation</p>
                <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                  Satya Nadella&apos;s Culture Reset
                </h3>
                <p className="text-navy-600 mb-4">
                  When Nadella took over Microsoft, internal competition was hurting innovation.
                  His first move wasn&apos;t a new product or acquisition. He changed how people
                  were evaluated: from &quot;know-it-all&quot; to &quot;learn-it-all.&quot; This single leadership
                  decision unlocked collaboration that drove Microsoft&apos;s market cap from $300B to $3T+.
                </p>
                <p className="text-sm text-navy-500">
                  Key insight: Culture change starts with how you measure success.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-8 bg-white rounded-xl border border-navy-100 h-full">
                <p className="text-sm text-accent-500 font-medium mb-2">Crisis Leadership</p>
                <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                  Johnson & Johnson&apos;s 1982 Response
                </h3>
                <p className="text-navy-600 mb-4">
                  When cyanide-laced Tylenol killed seven people, CEO James Burke faced a crisis.
                  Against legal advice, he pulled 31 million bottles off shelves at a $100M loss.
                  The decision seemed costly but rebuilt trust. Within a year, Tylenol regained
                  its market leadership.
                </p>
                <p className="text-sm text-navy-500">
                  Key insight: In crisis, values-driven decisions pay long-term dividends.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
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
