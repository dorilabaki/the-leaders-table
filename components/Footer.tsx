import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, navigation } from '@/lib/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt="The Leader's Table"
                width={44}
                height={44}
                className="rounded-lg"
              />
              <span className="font-heading font-bold text-xl">{siteConfig.name}</span>
            </Link>
            <p className="text-navy-300 mb-6 max-w-md">
              {siteConfig.tagline} Join {siteConfig.followers}+ professionals elevating their leadership journey.
            </p>
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-navy-900 font-medium rounded-lg hover:bg-navy-100 transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
              Follow on LinkedIn
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-navy-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {navigation.slice(5).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-navy-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-navy-300 hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-navy-400 text-sm">
            Your source for practical leadership wisdom.
          </p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
