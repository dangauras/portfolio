import React from 'react';
import { ArrowUp } from 'lucide-react';
import { DESIGNER_INFO } from '../data/projects.js';

/**
 * Clean Editorial Footer
 * Adheres to anti-slop rules: no ornamental telemetry or fake execution tags.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-950/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3 text-xs text-stone-600 dark:text-stone-400">
            <span className="font-bold text-stone-900 dark:text-white">
              {DESIGNER_INFO.name}
            </span>
            <span aria-hidden="true">·</span>
            <span>Independent Design Practice</span>
            <span aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex items-center gap-6 text-xs text-stone-600 dark:text-stone-400">
            <a href="#works" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Works
            </a>
            <a href="#capabilities" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#contact" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Contact
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors ml-2"
              aria-label="Scroll back to top of page"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
