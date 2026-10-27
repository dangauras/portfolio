import React, { useMemo, useState } from 'react';
import { ArrowUpRight, Eye, Search, Sparkles } from 'lucide-react';
import { CATEGORIES, PROJECTS } from '../data/projects.js';

export default function InteractiveGallery({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All Works');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === 'All Works' || project.category === activeCategory;
      const searchableContent = [
        project.title,
        project.subtitle,
        project.category,
        project.client,
        project.year,
        ...project.deliverables,
      ]
        .join(' ')
        .toLowerCase();

      return matchesCategory && (!query || searchableContent.includes(query));
    });
  }, [activeCategory, searchQuery]);

  const resetFilters = () => {
    setActiveCategory('All Works');
    setSearchQuery('');
  };

  return (
    <section
      id="works"
      className="border-b border-stone-200 py-20 dark:border-stone-800 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Selected work · 2024—2026</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl lg:text-5xl">
              Thoughtful work, built to make a difference.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-stone-600 dark:text-stone-400 sm:text-base">
            A selection of digital products, identities, and visual systems shaped
            around real people and ambitious ideas.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-5 border-y border-stone-200 py-5 dark:border-stone-800 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950 ${
                    isActive
                      ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900'
                      : 'border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-950 dark:border-stone-800 dark:text-stone-400 dark:hover:border-stone-600 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <label className="relative block w-full lg:max-w-xs">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400"
              aria-hidden="true"
            />
            <span className="sr-only">Search selected projects</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search projects"
              className="w-full rounded-full border border-stone-200 bg-white py-2.5 pl-10 pr-4 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100"
            />
          </label>
        </div>

        <p
          className="mb-5 text-xs text-stone-500 dark:text-stone-400"
          aria-live="polite"
        >
          Showing {filteredProjects.length} of {PROJECTS.length} projects
        </p>

        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-300 px-6 py-16 text-center dark:border-stone-800">
            <p className="mb-4 text-sm text-stone-600 dark:text-stone-400">
              No projects found. Try a different search or category.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="text-sm font-semibold text-amber-700 hover:text-amber-600 focus:outline-none focus-visible:underline dark:text-amber-400"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {filteredProjects.map((project, index) => {
              const isFeatured = index === 0;

              return (
                <article
                  key={project.id}
                  className={`group overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-amber-400/70 hover:shadow-xl hover:shadow-stone-900/5 dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-amber-500/50 dark:hover:shadow-black/20 ${
                    isFeatured ? 'xl:col-span-2 xl:flex' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    aria-label={`Open case study: ${project.title}`}
                    className={`group/media relative block aspect-[4/3] w-full overflow-hidden bg-stone-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500 dark:bg-stone-950 ${
                      isFeatured ? 'xl:aspect-auto xl:w-[58%]' : ''
                    }`}
                  >
                    <img
                      src={project.coverImage}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/media:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-stone-950/65 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover/media:opacity-100 group-focus-visible/media:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-lg">
                        <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                        View case study
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-900 shadow-lg">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </span>
                  </button>

                  <div
                    className={`flex min-w-0 flex-1 flex-col p-5 sm:p-6 ${
                      isFeatured ? 'xl:justify-center xl:p-8' : ''
                    }`}
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">
                      <span className="text-amber-700 dark:text-amber-400">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3
                      className={`mb-2 font-semibold tracking-tight text-stone-900 transition-colors group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400 ${
                        isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="mb-6 text-sm leading-6 text-stone-600 dark:text-stone-400">
                      {project.subtitle}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-stone-100 pt-4 dark:border-stone-800">
                      <span className="min-w-0 truncate text-xs text-stone-500 dark:text-stone-400">
                        {project.impactMetrics[0].label}:{' '}
                        <span className="font-semibold text-stone-900 dark:text-stone-100">
                          {project.impactMetrics[0].value}
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-stone-900 transition-colors hover:text-amber-700 focus:outline-none focus-visible:underline dark:text-stone-100 dark:hover:text-amber-400"
                        aria-label={`Read the ${project.title} case study`}
                      >
                        Read case study
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
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
