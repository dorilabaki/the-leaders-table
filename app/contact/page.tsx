import { Metadata } from 'next';
import { siteConfig } from '@/lib/content';
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { BreadcrumbSchema } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with The Leader\'s Table. Connect with us on LinkedIn or send us a message.',
  alternates: {
    canonical: '/contact/',
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'LinkedIn',
      description: 'Follow us and join the conversation with 161,812+ professionals.',
      action: 'Follow Us',
      href: siteConfig.linkedIn,
      icon: LinkedInIcon,
    },
    {
      title: 'Email',
      description: 'For partnerships, press inquiries, or general questions.',
      action: 'Send Email',
      href: `mailto:${siteConfig.email}`,
      icon: EmailIcon,
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="container-wide">
          <AnimatedDiv className="max-w-3xl">
            <p className="text-accent-400 font-medium mb-4 uppercase tracking-wide text-sm">Contact</p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Have a question, partnership idea, or just want to connect?
              We&apos;d love to hear from you.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Contact Methods */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-wide">
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <StaggerItem key={method.title}>
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block bg-navy-50 rounded-2xl p-8 hover:bg-navy-100 transition-colors border border-navy-100 text-center"
                >
                  <div className="w-16 h-16 bg-navy-900 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500 transition-colors">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
                    {method.title}
                  </h2>
                  <p className="text-navy-600 mb-6">{method.description}</p>
                  <span className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg group-hover:bg-accent-500 transition-colors">
                    {method.action}
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Contact Form Placeholder */}
      <AnimatedSection className="section-padding bg-navy-50">
        <div className="container-narrow">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-navy-100">
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6 text-center">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ CTA */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">
            Looking for Quick Answers?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Check out our FAQ page for answers to common questions about leadership.
          </p>
          <a
            href="/faq/"
            className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-400 transition-colors"
          >
            View FAQ
          </a>
        </div>
      </AnimatedSection>
    </>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
