'use client';

import { useState, FormEvent } from 'react';
import { siteConfig } from '@/lib/content';

type Status = 'idle' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject || 'Message from theleaderstable.xyz')}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="font-heading font-bold text-navy-900 text-xl mb-2">Opening your email app…</p>
        <p className="text-navy-600">
          If nothing opened,{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-accent-500 hover:text-accent-600 underline">
            email us directly
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === 'error' && (
        <p className="text-accent-600 text-sm font-medium" role="alert">
          Please fill in your name, email, and message before sending.
        </p>
      )}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-navy-700 mb-2">
            Name <span aria-hidden="true" className="text-accent-500">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-navy-700 mb-2">
            Email <span aria-hidden="true" className="text-accent-500">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-navy-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
          placeholder="What is this about?"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-navy-700 mb-2">
          Message <span aria-hidden="true" className="text-accent-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
  );
}
