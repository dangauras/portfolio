/**
 * Contact form validation utilities (pure JavaScript)
 */

export function validateEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function validateContactForm(formData) {
  const errors = {};

  // Name validation
  if (!formData.name || !formData.name.trim()) {
    errors.name = 'Please provide your full name.';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  // Email validation
  if (!formData.email || !formData.email.trim()) {
    errors.email = 'Please provide your email address.';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address (e.g. name@domain.com).';
  }

  // Project type validation
  if (!formData.projectType || formData.projectType === '') {
    errors.projectType = 'Please select a project category.';
  }

  // Message validation
  if (!formData.message || !formData.message.trim()) {
    errors.message = 'Please describe your project scope or inquiry.';
  } else if (formData.message.trim().length < 15) {
    errors.message = 'Please provide at least 15 characters describing the project.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
