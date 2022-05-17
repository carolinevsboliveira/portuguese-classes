/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig
module.exports = withPWA({
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
