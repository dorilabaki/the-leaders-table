import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: "You're In — The Leadership Playbook | The Leader's Table",
  description: 'Thank you for downloading The Leadership Playbook. Here\'s a preview of three essential leadership frameworks from the guide.',
  robots: { index: false, follow: false },
};

const frameworks = [
  {
    name: 'Situational Leadership Model',
    origin: 'Paul Hersey & Ken Blanchard, 1969',
    tag: 'People Development',
    summary:
      'There is no single best leadership style — the right style depends on the development level of the person you\'re leading. Hersey and Blanchard identified four leadership styles mapped to four follower development levels.',
    quadrants: [
      {
        style: 'S1 — Directing',
        follower: 'D1 (Low competence, high commitment)',
        action: 'Give clear instructions and close supervision. The follower is new and motivated but needs guidance.',
      },
      {
        style: 'S2 — Coaching',
        follower: 'D2 (Some competence, low commitment)',
        action: 'Explain decisions, solicit suggestions, and continue to direct. Motivation has dipped — coach through it.',
      },
      {
        style: 'S3 — Supporting',
        follower: 'D3 (High competence, variable commitment)',
        action: 'Share decision-making, encourage, and listen. The follower has the skill but may lack confidence.',
      },
      {
        style: 'S4 — Delegating',
        follower: 'D4 (High competence, high commitment)',
        action: 'Turn over responsibility. The follower is capable and motivated — trust them.',
      },
    ],
    applyIt:
      'Before your next 1:1, ask yourself: "Where is this person on the competence/commitment scale right now?" Then consciously choose your style for that conversation.',
  },
  {
    name: 'RACI Matrix',
    origin: 'Project Management Best Practice (PMI)',
    tag: 'Accountability',
    summary:
      'The RACI Matrix eliminates the most common source of team friction: ambiguity about who owns what. Every task or decision gets exactly four types of stakeholders.',
    quadrants: [
      {
        style: 'R — Responsible',
        follower: 'Who does the work?',
        action: 'The person (or people) who execute the task. There can be multiple Rs, but at least one.',
      },
      {
        style: 'A — Accountable',
        follower: 'Who owns the outcome?',
        action: 'The single person who is ultimately answerable. There must be exactly one A per task.',
      },
      {
        style: 'C — Consulted',
        follower: 'Who provides input?',
        action: 'Subject matter experts whose feedback is sought before decisions. Two-way communication.',
      },
      {
        style: 'I — Informed',
        follower: 'Who needs to know?',
        action: 'Stakeholders updated on progress and outcomes. One-way communication — they don\'t need to act.',
      },
    ],
    applyIt:
      'Take your current project list. For each major workstream, define the R and A first. If two people think they are both the A, that\'s the friction you need to resolve today.',
  },
  {
    name: 'Servant Leadership',
    origin: 'Robert K. Greenleaf, 1970',
    tag: 'Leadership Philosophy',
    summary:
      'Greenleaf flipped the traditional leadership pyramid: the leader\'s job is to serve the team, not to be served by it. A servant leader asks "How can I help my team succeed?" rather than "How can my team make me look good?"',
    quadrants: [
      {
        style: 'Listen First',
        follower: 'Core practice',
        action: 'Prioritize deep listening over talking. Understand your team\'s needs, concerns, and ideas before offering your own.',
      },
      {
        style: 'Build People Up',
        follower: 'Growth orientation',
        action: 'Commit to the personal and professional growth of every team member. Your success is measured by theirs.',
      },
      {
        style: 'Remove Obstacles',
        follower: 'Leader as enabler',
        action: 'Your primary job is to clear the path. Bureaucracy, unclear direction, resource gaps — that\'s your problem to solve.',
      },
      {
        style: 'Share Power',
        follower: 'Empowerment',
        action: 'Give away decision-making authority as often as you can. Shared ownership creates accountability and engagement.',
      },
    ],
    applyIt:
      'End your next team meeting by asking: "What\'s one thing I can do to make your work easier this week?" Then do it. Servant leadership is built one action at a time.',
  },
];

export default function ThankYouPage() {
  return (
    <>
      {/* Confirmation Header */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="container-narrow py-24 text-center">
          <AnimatedDiv>
            <div className="w-16 h-16 rounded-full bg-accent-500/20 border border-accent-500/40 flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="w-8 h-8 text-accent-400" />
            </div>
            <p className="text-accent-400 font-medium mb-3 tracking-wide uppercase text-sm">
              You&apos;re all set
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 text-white">
              Your Playbook Is On Its Way
            </h1>
            <p className="text-navy-200 text-lg max-w-xl mx-auto">
              Check your inbox for The Leadership Playbook. While you wait, here&apos;s
              a preview of three frameworks from the guide — start applying them today.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Framework Previews */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              3 Frameworks to Start With
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              These three are inside the full playbook. Here&apos;s enough to get started right now.
            </p>
          </div>

          <StaggerContainer className="space-y-8">
            {frameworks.map((fw, index) => (
              <StaggerItem key={fw.name}>
                <div className="bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden">
                  {/* Framework Header */}
                  <div className="bg-navy-900 px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <span className="inline-block px-3 py-1 bg-accent-500/20 text-accent-300 text-xs font-medium rounded-full mb-2">
                        {fw.tag}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-white">
                        {index + 1}. {fw.name}
                      </h3>
                    </div>
                    <p className="text-navy-400 text-sm shrink-0">{fw.origin}</p>
                  </div>

                  <div className="p-8">
                    {/* Summary */}
                    <p className="text-navy-700 text-base leading-relaxed mb-8">
                      {fw.summary}
                    </p>

                    {/* The Four Elements */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {fw.quadrants.map((q) => (
                        <div
                          key={q.style}
                          className="bg-navy-50 rounded-xl p-5 border border-navy-100"
                        >
                          <p className="font-heading font-bold text-navy-900 text-sm mb-1">
                            {q.style}
                          </p>
                          <p className="text-accent-500 text-xs font-medium mb-2">{q.follower}</p>
                          <p className="text-navy-600 text-sm leading-relaxed">{q.action}</p>
                        </div>
                      ))}
                    </div>

                    {/* Apply It */}
                    <div className="bg-accent-50 rounded-xl p-5 border border-accent-100">
                      <p className="text-accent-700 font-semibold text-sm mb-1">
                        Apply It This Week
                      </p>
                      <p className="text-accent-800 text-sm leading-relaxed">{fw.applyIt}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedDiv className="bg-navy-50 rounded-xl p-6 border border-navy-100">
              <BookIcon className="w-8 h-8 text-accent-500 mb-4" />
              <h3 className="font-heading font-bold text-navy-900 mb-2">Explore Guides</h3>
              <p className="text-navy-600 text-sm mb-4">
                Deep-dive resources on first-time management, building high-performance teams, and more.
              </p>
              <Link
                href="/guides/"
                className="inline-flex items-center text-accent-500 font-medium text-sm hover:text-accent-600 transition-colors"
              >
                Browse Guides <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </AnimatedDiv>

            <AnimatedDiv delay={0.1} className="bg-navy-50 rounded-xl p-6 border border-navy-100">
              <ArticleIcon className="w-8 h-8 text-accent-500 mb-4" />
              <h3 className="font-heading font-bold text-navy-900 mb-2">Read Articles</h3>
              <p className="text-navy-600 text-sm mb-4">
                Tactical, short-form leadership insights covering executive presence, delegation, and strategy.
              </p>
              <Link
                href="/resources/"
                className="inline-flex items-center text-accent-500 font-medium text-sm hover:text-accent-600 transition-colors"
              >
                Browse Articles <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </AnimatedDiv>

            <AnimatedDiv delay={0.2} className="bg-navy-900 rounded-xl p-6 border border-navy-700">
              <LinkedInIcon className="w-8 h-8 text-white/60 mb-4" />
              <h3 className="font-heading font-bold text-white mb-2">Join the Community</h3>
              <p className="text-navy-400 text-sm mb-4">
                Get daily leadership insights alongside {siteConfig.followersAggregated} {siteConfig.followersTagline}.
              </p>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-400 font-medium text-sm hover:text-accent-300 transition-colors"
              >
                Follow on LinkedIn <ArrowRightIcon className="ml-1 w-4 h-4" />
              </a>
            </AnimatedDiv>
          </div>
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

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function ArticleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
