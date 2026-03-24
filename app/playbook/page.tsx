import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import PlaybookForm from '@/components/PlaybookForm';

export const metadata: Metadata = {
  title: 'Free Leadership Playbook: 10 Frameworks Every New Leader Needs | The Leader\'s Table',
  description: 'Get the free Leadership Playbook featuring 10 proven frameworks — Situational Leadership, RACI Matrix, OKRs, and more — that new and mid-level leaders can apply immediately.',
  openGraph: {
    title: 'The Leadership Playbook: 10 Frameworks Every New Leader Needs',
    description: 'Trusted by 161K+ leaders. Get practical frameworks you can apply from day one.',
    url: `${siteConfig.url}/playbook/`,
    siteName: siteConfig.name,
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Leadership Playbook: 10 Frameworks Every New Leader Needs',
    description: 'Trusted by 161K+ leaders. Get practical frameworks you can apply from day one.',
    images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: '/playbook/',
  },
};

const previewFrameworks = [
  {
    number: '01',
    name: 'Situational Leadership Model',
    origin: 'Hersey & Blanchard, 1969',
    description:
      'Match your leadership style to each team member\'s development level. Four styles — Directing, Coaching, Supporting, and Delegating — applied based on competence and commitment.',
    tag: 'People Development',
  },
  {
    number: '02',
    name: 'RACI Matrix',
    origin: 'Project Management Institute',
    description:
      'End the "who owns this?" confusion for good. Assign every task one Responsible, one Accountable owner, plus Consulted and Informed stakeholders.',
    tag: 'Accountability',
  },
  {
    number: '03',
    name: "Tuckman's Stages of Team Development",
    origin: 'Bruce Tuckman, 1965',
    description:
      'Every team moves through Forming, Storming, Norming, and Performing. Knowing which stage your team is in tells you exactly how to lead them.',
    tag: 'Team Dynamics',
  },
  {
    number: '04',
    name: 'OKRs — Objectives & Key Results',
    origin: 'Andy Grove / Intel, popularized by John Doerr',
    description:
      'Set ambitious Objectives paired with 2–5 measurable Key Results. Used by Google, LinkedIn, and thousands of high-growth teams to align effort with impact.',
    tag: 'Goal Setting',
  },
  {
    number: '05',
    name: 'The Eisenhower Matrix',
    origin: 'Dwight D. Eisenhower / Stephen Covey',
    description:
      'Sort every task into four quadrants: Do (urgent + important), Schedule, Delegate, or Eliminate. A daily discipline that protects your highest-leverage time.',
    tag: 'Prioritization',
  },
];

const allFrameworks = [
  'Situational Leadership Model',
  'Servant Leadership (Robert Greenleaf)',
  'RACI Matrix',
  "Tuckman's Stages of Team Development",
  'OKRs — Objectives & Key Results',
  'The Eisenhower Matrix',
  '70-20-10 Learning Model',
  "McKinsey's 7-S Framework",
  "Michael Watkins' First 90 Days",
  'SMART Goal Framework',
];

export default function PlaybookPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        <div className="container-wide relative py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedDiv>
              <span className="inline-block px-4 py-1.5 bg-accent-500/20 text-accent-300 text-sm font-medium rounded-full mb-6 border border-accent-500/30">
                Free Resource — No Credit Card Required
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">The Leadership Playbook:</span>
                <br />
                <span className="text-accent-400">10 Frameworks Every</span>
                <br />
                <span className="text-white">New Leader Needs</span>
              </h1>
              <p className="text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                Stop guessing how to lead. These 10 proven frameworks — used by
                executives at Google, Intel, and beyond — give you a clear playbook
                for your first year and every year after.
              </p>
              <PlaybookForm />
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <AnimatedSection className="bg-white border-b border-navy-200">
        <div className="container-wide py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-center">
            <div>
              <p className="text-3xl font-heading font-bold text-navy-900">{siteConfig.followersAggregated}</p>
              <p className="text-navy-600 text-sm">{siteConfig.followersTagline}</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-navy-200" />
            <div>
              <p className="text-3xl font-heading font-bold text-navy-900">10</p>
              <p className="text-navy-600 text-sm">Proven Frameworks</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-navy-200" />
            <div>
              <p className="text-3xl font-heading font-bold text-navy-900">Free</p>
              <p className="text-navy-600 text-sm">Instant Download</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* What's Inside */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              What&apos;s Inside the Playbook
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Not theory — tools. Each framework comes with a plain-English
              explanation and a real-world application you can use this week.
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewFrameworks.map((fw) => (
              <StaggerItem key={fw.number}>
                <div className="bg-white rounded-xl p-7 border border-navy-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl font-heading font-bold text-navy-100 leading-none">
                      {fw.number}
                    </span>
                    <span className="inline-block px-2.5 py-1 bg-accent-100 text-accent-600 text-xs font-medium rounded-full">
                      {fw.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy-900 mb-1">
                    {fw.name}
                  </h3>
                  <p className="text-accent-500 text-xs font-medium mb-3">{fw.origin}</p>
                  <p className="text-navy-600 text-sm leading-relaxed flex-1">
                    {fw.description}
                  </p>
                </div>
              </StaggerItem>
            ))}

            {/* +5 More card */}
            <StaggerItem>
              <div className="bg-navy-900 rounded-xl p-7 border border-navy-700 h-full flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-heading font-bold text-navy-700 leading-none">
                    +5
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mt-4 mb-4">
                    Plus 5 More Frameworks Inside
                  </h3>
                  <ul className="space-y-2">
                    {allFrameworks.slice(5).map((name) => (
                      <li key={name} className="flex items-start gap-2 text-navy-300 text-sm">
                        <CheckIcon className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Who It's For */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedDiv>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                Built for Leaders in Their First 1–5 Years
              </h2>
              <p className="text-navy-600 text-lg mb-6 leading-relaxed">
                Whether you just got your first direct report or you&apos;re managing a
                team of 20, this playbook closes the gap between &quot;I was promoted&quot;
                and &quot;I know how to lead.&quot;
              </p>
              <ul className="space-y-4">
                {[
                  'New managers stepping into leadership for the first time',
                  'Mid-level leaders who want a repeatable system',
                  'Individual contributors preparing for their next promotion',
                  'Team leads who want to build a high-performance culture',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedDiv>
            <AnimatedDiv delay={0.1}>
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white">
                <p className="text-accent-300 font-medium text-sm uppercase tracking-wide mb-4">
                  From the Community
                </p>
                <blockquote className="text-xl font-heading font-medium leading-relaxed mb-6">
                  &ldquo;The RACI Matrix alone saved us hours of weekly confusion.
                  I wish I had this playbook when I first became a manager.&rdquo;
                </blockquote>
                <p className="text-navy-400 text-sm">
                  — Member of The Leader&apos;s Table community
                </p>
                <div className="mt-8 pt-6 border-t border-navy-700">
                  <p className="text-navy-300 text-sm">
                    Trusted by {siteConfig.followersAggregated} {siteConfig.followersTagline} on LinkedIn.
                  </p>
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </AnimatedSection>

      {/* Full Framework List */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">
              All 10 Frameworks at a Glance
            </h2>
            <p className="text-navy-600">
              Each one is battle-tested, widely recognized, and immediately actionable.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-navy-100 divide-y divide-navy-100 overflow-hidden shadow-sm">
            {allFrameworks.map((name, i) => (
              <div key={name} className="flex items-center gap-4 px-6 py-4">
                <span className="text-navy-300 font-heading font-bold text-sm w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <CheckIcon className="w-4 h-4 text-accent-500 shrink-0" />
                <span className="text-navy-800 font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Bottom CTA */}
      <AnimatedSection className="section-padding bg-navy-900 text-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4 text-white">
            Ready to Lead with Confidence?
          </h2>
          <p className="text-navy-300 text-lg mb-10 max-w-xl mx-auto">
            Get your free copy of The Leadership Playbook and start applying
            these frameworks today.
          </p>
          <PlaybookForm />
          <p className="mt-8 text-navy-500 text-sm">
            Already a member?{' '}
            <Link href="/resources/" className="text-accent-400 hover:text-accent-300 underline">
              Browse all resources →
            </Link>
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}
