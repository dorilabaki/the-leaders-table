import Link from 'next/link';
import { AnimatedDiv } from '@/components/AnimatedSection';

export default function LeadMagnetBanner() {
  return (
    <AnimatedDiv>
      <div className="bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl p-8 lg:p-10 text-white overflow-hidden relative">
        {/* Decorative background text */}
        <span
          aria-hidden="true"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/5 font-heading font-bold text-[10rem] leading-none select-none pointer-events-none"
        >
          10
        </span>
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-accent-100 text-sm font-medium uppercase tracking-wide mb-2">
              Free Resource
            </p>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-3 text-white">
              The Leadership Playbook: 10 Frameworks Every New Leader Needs
            </h2>
            <p className="text-accent-100 leading-relaxed">
              Situational Leadership, RACI Matrix, OKRs, and 7 more proven
              frameworks — free for every member of The Leader&apos;s Table community.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/playbook/"
              className="inline-flex items-center px-6 py-3 bg-white text-accent-600 font-semibold rounded-lg hover:bg-accent-100 transition-colors shadow-sm"
            >
              Get the Free Playbook
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
