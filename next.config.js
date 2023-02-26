/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: 'll652tro',
    NEXT_PUBLIC_SANITY_DATASET: 'production',
    NEXT_PUBLIC_SANITY_API_VERSION: '2022-11-16',

    SENDGRID_API_KEY:
      'REMOVED',
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ryangittings.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // temp
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//   },
// })
