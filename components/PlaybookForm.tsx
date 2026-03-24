'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function PlaybookForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      router.push('/playbook/thank-you/');
    } catch {
      setStatus('error');
      setErrorMessage('Connection error. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 rounded-lg bg-white border border-navy-200 text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-400 transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending…' : 'Get the Free Playbook'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-accent-600 text-sm">{errorMessage}</p>
      )}
      <p className="mt-3 text-navy-500 text-sm text-center">
        Free. No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
