/**
 * FEED CONFIGURATION - The Leader's Table
 *
 * Add your top LinkedIn posts here. Each post needs:
 * - linkedInUrl: Direct link to the LinkedIn post
 * - content: The post text (copy from LinkedIn)
 * - likes, comments, reposts: Current engagement numbers
 * - date: When it was posted (YYYY-MM-DD)
 *
 * Tips:
 * - Feature your 5-10 best performing posts
 * - Update engagement numbers periodically
 * - Put newest/best posts first
 */

export interface FeedPost {
  id: string
  linkedInUrl: string
  content: string
  likes: number
  comments: number
  reposts?: number
  date: string
}

export const feedConfig = {
  pageName: "The Leader's Table",
  linkedInUrl: "https://www.linkedin.com/company/the-leaders-table",
  followers: "161,000+",
  description: "Leadership insights from our LinkedIn community.",
}

// Add your top posts below - update URLs and engagement numbers as needed
export const feedPosts: FeedPost[] = [
  // EXAMPLE POST - Replace with your actual posts
  {
    id: "1",
    linkedInUrl: "https://www.linkedin.com/company/the-leaders-table/posts/", // Replace with actual post URL
    content: `The best leaders don't have all the answers.

They ask better questions.

"What do you think we should do?"
"What am I missing here?"
"How can I support you?"

Leadership isn't about being the smartest person in the room.
It's about making everyone in the room smarter.`,
    likes: 5200,
    comments: 345,
    reposts: 420,
    date: "2024-01-15",
  },
  {
    id: "2",
    linkedInUrl: "https://www.linkedin.com/company/the-leaders-table/posts/",
    content: `Micromanagement kills:
• Creativity
• Ownership
• Trust
• Motivation
• Growth

If you hired good people, let them do their jobs.

Your role is to set direction, remove obstacles, and get out of the way.`,
    likes: 6800,
    comments: 478,
    reposts: 556,
    date: "2024-01-10",
  },
  {
    id: "3",
    linkedInUrl: "https://www.linkedin.com/company/the-leaders-table/posts/",
    content: `The 3 questions every leader should ask in 1:1s:

1. "What's going well that I should know about?"
2. "What obstacles are in your way?"
3. "How can I better support you?"

Simple. Consistent. Powerful.

Your team doesn't need more meetings.
They need better conversations.`,
    likes: 4900,
    comments: 312,
    reposts: 389,
    date: "2024-01-05",
  },
  // Add more posts here...
]
