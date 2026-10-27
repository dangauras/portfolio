import React from 'react';
import { Quote, CheckCircle2, Award, Zap } from 'lucide-react';
import { DESIGNER_INFO } from '../data/projects.js';

/**
 * About, Capabilities & Testimonials Section
 * Showcases core disciplines, tool mastery, and attributable client testimonials.
 */
export default function AboutSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Capabilities Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
                Core Disciplines
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-white">
                Capabilities & Practice
              </h2>
            </div>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-md">
              A holistic design approach spanning strategic product discovery through to production-ready design tokens and interaction code.
            </p>
          </div>

          {/* 4 Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {DESIGNER_INFO.capabilities.map((cap) => (
              <div
                key={cap.num}
                className="p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-xs"
              >
                <div className="text-sm font-mono text-amber-600 dark:text-amber-400 font-bold mb-3">
                  {cap.num}
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tools & Environment Bar */}
          <div className="mt-8 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Technical Toolstack
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-stone-700 dark:text-stone-300">
              {DESIGNER_INFO.tools.map((tool, idx) => (
                <span key={tool} className="flex items-center gap-2">
                  <span>{tool}</span>
                  {idx < DESIGNER_INFO.tools.length - 1 && (
                    <span className="text-stone-300 dark:text-stone-700" aria-hidden="true">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy & Testimonials Section */}
        <div id="philosophy" className="pt-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
              Design Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white mb-4">
              "Clarity is kindness. Restraint is power."
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              In a digital world oversaturated with superficial novelty, lasting products win by eliminating friction, respecting human cognitive limits, and treating craftsmanship as a competitive moat.
            </p>
          </div>

          {/* Attributable Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DESIGNER_INFO.testimonials.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30 flex flex-col justify-between"
              >
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-amber-500/40 mb-4" />
                  <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60 dark:border-stone-800/60">
                  <div className="font-bold text-sm text-stone-900 dark:text-white">
                    {item.author}
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">
                    {item.title} · {item.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
