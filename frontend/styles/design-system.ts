'use client';

/**
 * Design System Components - ChurchConnect
 * Réutilisable pour toute l'application
 */

// Button Variants
export const buttonVariants = {
  primary: 'px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition disabled:opacity-50',
  secondary: 'px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition',
  danger: 'px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition',
  ghost: 'px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition',
};

// Card Styles
export const cardVariants = {
  base: 'bg-white rounded-lg shadow-md hover:shadow-lg transition p-6',
  compact: 'bg-white rounded-lg shadow-sm p-4',
  elevated: 'bg-white rounded-lg shadow-lg border border-gray-100 p-6',
};

// Typography
export const typography = {
  h1: 'text-4xl font-bold text-gray-900',
  h2: 'text-3xl font-bold text-gray-900',
  h3: 'text-2xl font-semibold text-gray-900',
  h4: 'text-xl font-semibold text-gray-900',
  body: 'text-base text-gray-700',
  small: 'text-sm text-gray-600',
  caption: 'text-xs text-gray-500',
};

// Colors
export const colors = {
  primary: {
    light: '#e0f2fe',
    main: '#0ea5e9',
    dark: '#0284c7',
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};

// Spacing
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
};

// Border Radius
export const borderRadius = {
  sm: '0.25rem',
  base: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
};

// Transitions
export const transitions = {
  fast: 'transition-all duration-150',
  base: 'transition-all duration-300',
  slow: 'transition-all duration-500',
};
