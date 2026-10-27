import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Copy,
  Check,
  Layers,
  Sparkles,
  Smartphone,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { PROJECTS } from '../data/projects.js';

/**
 * Interactive Project Modal / Drawer Lightbox
 * Allows visitors to view in-depth case study details,
 * interactive prototype simulations, and design tokens.
 */
export default function ProjectModal({ project, onClose, onNavigateProject }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'prototype' | 'tokens'
  const [copiedHex, setCopiedHex] = useState(null);
  
  // Interactive prototype state for simulation
  const [simBalanceHidden, setSimBalanceHidden] = useState(false);
  const [simActiveTab, setSimActiveTab] = useState('summary');
  const [simActionFeedback, setSimActionFeedback] = useState('');

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigateProject(1);
      if (e.key === 'ArrowLeft') onNavigateProject(-1);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNavigateProject]);

  if (!project) return null;

  const handleCopyColor = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleSimulateAction = (actionName) => {
    setSimActionFeedback(`Simulated "${actionName}" completed`);
    setTimeout(() => setSimActionFeedback(''), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Sticky Modal Header */}
        <div className="p-4 sm:p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between gap-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm sticky top-0 z-20">
          <div className="min-w-0">
            {/* Zero-Pill Metadata */}
            <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-1">
              <span className="font-semibold text-amber-600 dark:text-amber-400">
                {project.category}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.client}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>
            <h2
              id="modal-project-title"
              className="text-lg sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-white truncate"
            >
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Prev / Next project navigation */}
            <button
              type="button"
              onClick={() => onNavigateProject(-1)}
              className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Previous project"
              title="Previous project (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigateProject(1)}
              className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Next project"
              title="Next project (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors ml-1"
              aria-label="Close modal dialog"
              title="Close modal (Escape)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 pt-3 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center gap-6 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-amber-500 text-stone-900 dark:text-white font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Case Study & Story</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('prototype')}
            className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'prototype'
                ? 'border-amber-500 text-stone-900 dark:text-white font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Interactive Prototype</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tokens')}
            className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'tokens'
                ? 'border-amber-500 text-stone-900 dark:text-white font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Design Tokens & Spec</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* TAB 1: OVERVIEW & CASE STUDY */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              {/* Main Media Showcase */}
              <div className="rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950 aspect-16/10 relative">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Summary Lead */}
              <div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">
                  Project Overview
                </h3>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-base">
                  {project.summary}
                </p>
              </div>

              {/* Challenge vs Solution 2-Column Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
                  <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
                    The Challenge
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                    The Design Solution
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Quantifiable Impact Metrics */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-4">
                  Measurable Impact & Outcomes
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.impactMetrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900"
                    >
                      <div className="text-2xl sm:text-3xl font-bold tracking-tight text-amber-600 dark:text-amber-400 tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-xs font-semibold text-stone-900 dark:text-stone-200 mt-1">
                        {metric.label}
                      </div>
                      <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                        {metric.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                  Scope & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-lg border border-stone-200 dark:border-stone-800 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-50/50 dark:bg-stone-950/50"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE PROTOTYPE SIMULATOR */}
          {activeTab === 'prototype' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between">
                <span>Interactive prototype preview for <strong>{project.title}</strong>. Click controls below to test live responsive state changes.</span>
                {simActionFeedback && (
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 animate-pulse">
                    ✓ {simActionFeedback}
                  </span>
                )}
              </div>

              {/* Interactive Device Shell */}
              <div className="max-w-md mx-auto rounded-3xl border-4 border-stone-800 dark:border-stone-700 bg-stone-950 text-white p-5 shadow-2xl">
                {/* Device Status Bar */}
                <div className="flex items-center justify-between text-xs text-stone-400 mb-4 pb-2 border-b border-stone-800">
                  <span className="tabular-nums font-mono">09:41</span>
                  <div className="w-16 h-3 bg-stone-900 rounded-full" />
                  <span className="text-[10px]">5G · 100%</span>
                </div>

                {/* Simulated Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-stone-400">Total Valuation</div>
                      <div className="text-2xl font-bold tracking-tight text-white tabular-nums">
                        {simBalanceHidden ? '••••••••' : project.prototypeStats.activeBalance || '$48,290.00'}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSimBalanceHidden(!simBalanceHidden)}
                      className="px-2.5 py-1 text-[11px] rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                    >
                      {simBalanceHidden ? 'Show' : 'Hide'}
                    </button>
                  </div>

                  {/* Interactive Action Bar */}
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handleSimulateAction('Instant Transfer')}
                      className="p-2.5 rounded-xl bg-stone-800 hover:bg-amber-400 hover:text-stone-950 transition-colors text-xs font-medium text-center"
                    >
                      Transfer
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSimulateAction('Deposit Funds')}
                      className="p-2.5 rounded-xl bg-stone-800 hover:bg-amber-400 hover:text-stone-950 transition-colors text-xs font-medium text-center"
                    >
                      Deposit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSimulateAction('Export Tax Report')}
                      className="p-2.5 rounded-xl bg-stone-800 hover:bg-amber-400 hover:text-stone-950 transition-colors text-xs font-medium text-center"
                    >
                      Reports
                    </button>
                  </div>

                  {/* Live Simulation Specs */}
                  <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs space-y-2">
                    <div className="text-stone-400 font-semibold uppercase text-[10px] tracking-wider">
                      Live Telemetry
                    </div>
                    {Object.entries(project.prototypeStats).map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center text-stone-300">
                        <span className="capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-mono text-amber-400">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DESIGN TOKENS & SYSTEM SPEC */}
          {activeTab === 'tokens' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
                  System Color Palette
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-4">
                  Click any color swatch to copy its hexadecimal token directly to your clipboard.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {project.palette.map((color, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCopyColor(color.hex)}
                      className="group cursor-pointer rounded-xl border border-stone-200 dark:border-stone-800 p-3 bg-stone-50 dark:bg-stone-950 hover:border-amber-500 transition-all"
                    >
                      <div
                        className="w-full h-16 rounded-lg mb-2 shadow-xs group-hover:scale-102 transition-transform border border-black/5"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="text-xs font-semibold text-stone-900 dark:text-white truncate">
                        {color.name}
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400 mt-1">
                        <span>{color.hex}</span>
                        {copiedHex === color.hex ? (
                          <Check className="w-3 h-3 text-emerald-500" />
                        ) : (
                          <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography & Spacing Spec */}
              <div className="p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Architectural Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-stone-400 block mb-1">Display Face</span>
                    <strong className="text-stone-900 dark:text-white font-semibold">Outfit (SemiBold 600)</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block mb-1">Body Typography</span>
                    <strong className="text-stone-900 dark:text-white font-semibold">Plus Jakarta Sans (400/500)</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block mb-1">Spatial Grid</span>
                    <strong className="text-stone-900 dark:text-white font-semibold">8px Soft Grid · 16px Gutters</strong>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Primary Next Project CTA */}
        <div className="p-4 sm:p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-500 dark:text-stone-400">
            Role: <span className="font-semibold text-stone-800 dark:text-stone-200">{project.role}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 sm:flex-none text-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              Discuss a Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
