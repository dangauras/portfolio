import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, ShieldCheck, Eye, ChevronRight } from 'lucide-react';
import { DESIGNER_INFO, PROJECTS } from '../data/projects.js';
import studioImage from '../assets/images/hero_designer_studio_1793074941737.jpg';

/**
 * High-Impact Hero Section Component
 * Features:
 * - Catchy, memorable headline with typographic balance and subtle gradient accent
 * - Compelling subheadline communicating core design value and domain mastery
 * - High-conversion primary Call-to-Action button to view projects
 * - Interactive hero spotlight allowing visitors to cycle through top design projects
 * - Full-width quantitative proof metrics strip
 */
export default function Hero({ onExploreClick, onSelectProject }) {
  // Active spotlight project index for the interactive right visual container
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0);

  // Featured projects list for quick-switching in the hero
  const spotlightProjects = [
    {
      id: 'studio-lab',
      title: 'Aetheria Studio Lab',
      category: 'Workspace & Prototyping',
      image: studioImage,
      stat: 'San Francisco & Tokyo Desk',
      isStudio: true,
    },
    ...PROJECTS.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      image: p.coverImage,
      stat: `${p.impactMetrics[0].label}: ${p.impactMetrics[0].value}`,
      originalProject: p,
      isStudio: false,
    }))
  ];

  const currentSpotlight = spotlightProjects[activeSpotlightIdx] || spotlightProjects[0];

  const handleOpenSpotlight = () => {
    if (currentSpotlight.originalProject && onSelectProject) {
      onSelectProject(currentSpotlight.originalProject);
    } else {
      onExploreClick();
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-5">
              <span>Senior Product Designer</span>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <span>Design Systems Architect</span>
            </div>

            {/* Catchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-stone-900 dark:text-white leading-[1.08] mb-6 text-balance">
              Transforming complex products into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-amber-300 dark:via-amber-400 dark:to-amber-300">
                timeless digital experiences.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed mb-8">
              Hi, I'm <span className="font-semibold text-stone-900 dark:text-stone-100">{DESIGNER_INFO.name}</span>. I design scalable design systems, high-density fintech interfaces, and tactile brand identities that elevate brands and compound user trust.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onExploreClick}
                className="group px-7 py-4 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5"
                aria-label="View design projects portfolio"
              >
                <span>Explore Selected Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </button>

              <a
                href="#contact"
                className="px-6 py-4 text-sm font-medium text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white border border-stone-300 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-600 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" aria-hidden="true" />
              </a>
            </div>

            {/* Availability & Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                <span className="font-medium text-stone-700 dark:text-stone-300">{DESIGNER_INFO.availability}</span>
              </span>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <span>Based in {DESIGNER_INFO.location}</span>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <span>8+ Years Shipped Experience</span>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Spotlight Container (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-3">
              
              {/* Main Visual Showcase Frame */}
              <div className="relative group rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 shadow-xl">
                <img
                  key={currentSpotlight.image}
                  src={currentSpotlight.image}
                  alt={currentSpotlight.title}
                  className="w-full h-auto aspect-16/10 object-cover object-center group-hover:scale-103 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle scrim for optical contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent pointer-events-none" />

                {/* Overlay Details */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
                      {currentSpotlight.category}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white leading-tight">
                      {currentSpotlight.title}
                    </div>
                    <div className="text-xs text-stone-300 mt-1">
                      {currentSpotlight.stat}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleOpenSpotlight}
                    className="p-2.5 rounded-xl bg-white/95 hover:bg-white text-stone-950 text-xs font-semibold flex items-center gap-1.5 shadow-lg shrink-0 transition-transform hover:scale-105 active:scale-95"
                    aria-label={`Inspect ${currentSpotlight.title}`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Inspect</span>
                  </button>
                </div>
              </div>

              {/* Spotlight Switcher Tabs (Functional filter controls) */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 p-1 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800" role="tablist" aria-label="Featured spotlight projects">
                {spotlightProjects.map((p, idx) => {
                  const isActive = activeSpotlightIdx === idx;
                  const label = idx === 0 ? 'Studio' : p.title.split('·')[0].trim().split(' ')[0];
                  return (
                    <button
                      key={p.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveSpotlightIdx(idx)}
                      className={`py-1.5 px-2 text-[11px] font-medium rounded-lg text-center truncate transition-all ${
                        isActive
                          ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-white shadow-xs font-semibold'
                          : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
                      }`}
                      title={p.title}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Proof Metrics Strip below the split */}
        <div className="mt-16 pt-12 border-t border-stone-200/80 dark:border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white tabular-nums">
              {DESIGNER_INFO.experienceYears}
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-1 font-medium">
              Years of Craft
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white tabular-nums">
              {DESIGNER_INFO.shippedProducts}
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-1 font-medium">
              Shipped Products
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white tabular-nums">
              {DESIGNER_INFO.awardsWon}
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-1 font-medium">
              International Awards
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white tabular-nums">
              {DESIGNER_INFO.recommendationRate}
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-1 font-medium">
              Client Satisfaction
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
