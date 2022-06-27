/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const translatedRoutes = require('./translate-routes.json')

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  styledComponents: true,
  reactStrictMode: true,
  env: {
    REACT_FIREBASE_API_KEY: process.env.REACT_FIREBASE_API_KEY,
    REACT_FIREBASE_AUTH_DOMAIN: process.env.REACT_FIREBASE_AUTH_DOMAIN,
    REACT_FIREBASE_APP_PROJECT_ID: process.env.REACT_FIREBASE_APP_PROJECT_ID,
    REACT_FIREBASE_STORAGE_BUCKET: process.env.REACT_FIREBASE_STORAGE_BUCKET,
    REACT_FIREBASE_MESSAGING_SENDER_ID: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
    REACT_FIREBASE_APP_ID: process.env.REACT_FIREBASE_APP_ID,
    REACT_SANITY_PROJECT_ID: process.env.REACT_SANITY_PROJECT_ID,
    REACT_SANITY_API_TOKEN: process.env.REACT_SANITY_API_TOKEN,
    REACT_CLASSROOM_DEFAULT_IMAGE_ID: process.env.REACT_CLASSROOM_DEFAULT_IMAGE_ID,
    REACT_FIREBASE_ADMIN_CLIENT_EMAIL: process.env.REACT_FIREBASE_ADMIN_CLIENT_EMAIL,
    REACT_FIREBASE_ADMIN_PRIVATE_KEY: process.env.REACT_FIREBASE_ADMIN_PRIVATE_KEY,
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_SERVICE_TEMPLATE_ID: process.env.EMAIL_SERVICE_TEMPLATE_ID,
    EMAIL_SERVICE_USER_ID: process.env.EMAIL_SERVICE_USER_ID,
    FIREBASE_RESET_URL: process.env.FIREBASE_RESET_URL
  },
  rewrites: async () => translatedRoutes,
  debug: true
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  ...nextConfig
})
