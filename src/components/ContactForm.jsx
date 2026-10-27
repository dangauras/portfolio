import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight, MessageSquare, Clock } from 'lucide-react';
import { validateContactForm } from '../utils/validation.js';

/**
 * Responsive, High-Performance Contact Form
 * Features:
 * - Real-time validation with inline error messaging
 * - Accessible input labels and aria-invalid attributes
 * - Submit state with simulated async delivery
 * - Success confirmation view with reset option
 * - Direct contact channel links
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'product-design',
    budget: '$15,000 - $30,000',
    timeline: 'Within 1-2 months',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time error clearance if touched
    if (touched[name]) {
      const validation = validateContactForm({ ...formData, [name]: value });
      setErrors((prev) => ({
        ...prev,
        [name]: validation.errors[name] || undefined,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validation = validateContactForm(formData);
    setErrors(validation.errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      projectType: true,
      message: true,
    });

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate high-performance API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'product-design',
      budget: '$15,000 - $30,000',
      timeline: 'Within 1-2 months',
      message: '',
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
            Initiate Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-white mb-4">
            Let's build something exceptional together.
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400">
            Currently booking strategic design partnerships for upcoming quarters. Fill out the brief below or reach out directly via email.
          </p>
        </div>

        {/* 2-Column Split: Contact Channels + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                Direct Inquiries
              </div>
              <a
                href="mailto:suresh.dangaura@example.com"
                className="text-base font-bold text-stone-900 dark:text-white hover:text-amber-500 transition-colors block mt-2"
              >
                suresh.dangaura@example.com
              </a>
              <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mt-2">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Response time: within 24 hours</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/20 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                Studio Locations
              </div>
              <div className="text-sm text-stone-700 dark:text-stone-300 space-y-1">
                <p className="font-semibold text-stone-900 dark:text-white">San Francisco & Tokyo</p>
                <p className="text-xs text-stone-500">Available across PST & JST timezones</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 px-1">
                External Profiles
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Read.cv Profile', url: '#' },
                  { name: 'LinkedIn', url: '#' },
                  { name: 'Dribbble Pro', url: '#' },
                  { name: 'GitHub Architecture', url: '#' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    className="flex items-center justify-between p-3 rounded-xl border border-stone-200 dark:border-stone-800 text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-10 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/60 shadow-xl">
              
              {isSubmitted ? (
                /* Success View */
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-white">
                    Project Inquiry Received
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your project brief has been logged. I'll review the details and respond to <strong>{formData.email}</strong> within one business day.
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2"
                      >
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Sarah Jenkins"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none transition-colors ${
                          errors.name && touched.name
                            ? 'border-rose-500 focus:ring-2 focus:ring-rose-500'
                            : 'border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-amber-500'
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p id="name-error" className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. sarah@venture.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none transition-colors ${
                          errors.email && touched.email
                            ? 'border-rose-500 focus:ring-2 focus:ring-rose-500'
                            : 'border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-amber-500'
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Category & Budget Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2"
                      >
                        Project Discipline <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="product-design">Digital Product & UX Design</option>
                        <option value="brand-identity">Brand Identity & Direction</option>
                        <option value="design-system">Design System & Tokens</option>
                        <option value="motion-prototyping">Motion & Interactive Prototype</option>
                        <option value="editorial-print">Editorial & Print Monograph</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2"
                      >
                        Estimated Investment Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="$10,000 - $20,000">$10,000 – $20,000</option>
                        <option value="$20,000 - $40,000">$20,000 – $40,000</option>
                        <option value="$40,000+">$40,000+ (Retainer / Enterprise)</option>
                        <option value="Advisory">Advisory & Audit ($5,000+)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2"
                    >
                      Project Scope & Goals <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Share context about your company, core challenges, and target milestones..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none transition-colors ${
                        errors.message && touched.message
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500'
                          : 'border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-amber-500'
                      }`}
                    />
                    {errors.message && touched.message && (
                      <p id="message-error" className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
