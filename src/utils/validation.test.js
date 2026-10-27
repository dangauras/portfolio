import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEmail, validateContactForm } from './validation.js';

test('validateEmail correctly identifies valid emails', () => {
  assert.equal(validateEmail('suresh@example.com'), true);
  assert.equal(validateEmail('user.name+tag@sub.domain.org'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('missing@domain'), false);
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail(null), false);
});

test('validateContactForm rejects empty required fields', () => {
  const result = validateContactForm({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.projectType);
  assert.ok(result.errors.message);
});

test('validateContactForm rejects short messages', () => {
  const result = validateContactForm({
    name: 'Elena Rostova',
    email: 'elena@studio.design',
    projectType: 'product-design',
    message: 'Too short'
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts valid complete submissions', () => {
  const result = validateContactForm({
    name: 'Jonathan Vance',
    email: 'jonathan@aetheria.io',
    projectType: 'brand-identity',
    budget: '$20k-$50k',
    message: 'We are redesigning our global flagship banking application and would like to collaborate on the design system.'
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});
