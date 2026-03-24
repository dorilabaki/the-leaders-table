'use client';

import { useState } from 'react';
import Link from 'next/link';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

interface ResourcesFilterProps {
  articles: Article[];
  categories: string[];
}

export default function ResourcesFilter({ articles, categories }: ResourcesFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  return (
    <>
      {/* Category Filter */}
      <div className="py-8 bg-white border-b border-navy-200">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter articles by category">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === null
                  ? 'bg-navy-900 text-white'
                  : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
              }`}
              aria-pressed={activeCategory === null}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-navy-900 text-white'
                    : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="section-padding bg-navy-50">
        <div className="container-wide">
          {filtered.length === 0 ? (
            <p className="text-navy-600 text-center py-12">No articles found in this category.</p>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article) => (
                <StaggerItem key={article.slug}>
                  <Link
                    href={`/resources/${article.slug}/`}
                    className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-navy-100 h-full"
                  >
                    <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center" aria-hidden="true">
                      <span className="text-white/20 font-heading text-6xl font-bold">TL</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-accent-500 text-sm font-medium">{article.category}</span>
                        <span className="text-navy-600 text-sm">{article.readTime}</span>
                      </div>
                      <h2 className="font-heading text-lg font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-navy-600 text-sm line-clamp-3">{article.excerpt}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </div>
    </>
  );
}
