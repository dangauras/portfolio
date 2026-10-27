import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Search, Eye, Sparkles, Filter } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '../data/projects.js';

/**
 * Interactive Project Gallery
 * Features:
 * - Category filter tabs (All, Product Design, Brand, Motion/Audio, Editorial)
 * - Search filter for live filtering
 * - Zero-pill metadata with typographic separators (discipline · client · year)
 * - Bento / Masonry card responsive grid with smooth hover transitions
 * - Modal trigger on project click
 */
export default function InteractiveGallery({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All Works');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered projects memoized for fast rendering
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === 'All Works' || project.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.deliverables.some((d) =>
          d.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="works" className="py-20 md:py-28 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
              Portfolio Archive · 2024–2026
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-white">
              Selected Projects & Case Studies
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-md">
            Click any project to explore the interactive case study, design system tokens, and tactile prototypes.
          </p>
        </div>

        {/* Filter Bar & Search Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200 dark:border-stone-800">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none" role="tablist" aria-label="Project categories">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input for fast query */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tokens..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Filter projects by title or deliverable"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-stone-300 dark:border-stone-800 rounded-2xl">
            <p className="text-base text-stone-600 dark:text-stone-400 mb-4">
              No projects match your current filter criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All Works');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-medium text-amber-700 dark:text-amber-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => {
              // Bento layout: first project or specific cards can be highlighted
              return (
                <article
                  key={project.id}
                  className="group flex flex-col rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/60 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-400/50 dark:hover:border-amber-500/50 transition-all duration-300"
                >
                  {/* Media Frame */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative aspect-4/3 overflow-hidden bg-stone-100 dark:bg-stone-950 cursor-pointer"
                  >
                    <img
                      src={project.coverImage}
                      alt={`${project.title} - ${project.subtitle}`}
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-4 py-2 text-xs font-semibold text-stone-950 bg-white/95 rounded-lg shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Eye className="w-3.5 h-3.5 text-stone-900" />
                        <span>Open Case Study</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Zero-Pill Metadata (Clean typography with separators) */}
                      <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-2.5">
                        <span className="font-semibold text-amber-700 dark:text-amber-400">
                          {project.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.client}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.year}</span>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors cursor-pointer mb-2"
                      >
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4 line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Key Metrics / Deliverables Preview & CTA */}
                    <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400">
                        <span className="font-medium text-stone-900 dark:text-stone-200">
                          {project.impactMetrics[0].label}:
                        </span>
                        <span className="text-amber-600 dark:text-amber-400 font-bold tabular-nums">
                          {project.impactMetrics[0].value}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors focus:outline-none"
                        aria-label={`View detailed case study for ${project.title}`}
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
