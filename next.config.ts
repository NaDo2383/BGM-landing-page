/** @type {import('tailwindcss').Config} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}

const withNextIntl = require('next-intl/plugin')('./src/lib/i18n.ts');

module.exports = withNextIntl(nextConfig);