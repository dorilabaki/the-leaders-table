'use client';

import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { FeedPost, feedConfig } from '@/lib/feed';

export default function FeedPostsList({ posts }: { posts: FeedPost[] }) {
  return (
    <StaggerContainer className="space-y-6">
      {posts.map((post) => (
        <StaggerItem key={post.id}>
          <article className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-navy-100">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center text-white font-bold"
                aria-hidden="true"
              >
                TL
              </div>
              <div>
                <p className="font-semibold text-navy-900">{feedConfig.pageName}</p>
                <p className="text-sm text-navy-600">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="whitespace-pre-line text-navy-700 leading-relaxed mb-6">
              {post.content}
            </div>

            {/* Engagement */}
            <div className="flex items-center gap-6 pt-4 border-t border-navy-100 text-sm text-navy-600">
              <span className="flex items-center gap-2" aria-label={`${post.likes.toLocaleString()} likes`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                {post.likes.toLocaleString()}
              </span>
              <span className="flex items-center gap-2" aria-label={`${post.comments.toLocaleString()} comments`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {post.comments.toLocaleString()}
              </span>
              {post.reposts && (
                <span className="flex items-center gap-2" aria-label={`${post.reposts.toLocaleString()} reposts`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  {post.reposts.toLocaleString()}
                </span>
              )}
              <a
                href={post.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-2 text-[#0A66C2] hover:text-[#004182] transition-colors font-medium"
              >
                <LinkedInIcon className="w-4 h-4" aria-hidden="true" />
                View on LinkedIn
              </a>
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

function LinkedInIcon({ className, 'aria-hidden': ariaHidden }: { className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
