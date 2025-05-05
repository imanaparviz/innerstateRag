const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // Increase Next.js memory limit to handle large blog posts with base64 images
  webpack: (config) => {
    // Increase the default buffer size limit for parsing assets
    config.performance = {
      ...config.performance,
      maxAssetSize: 3 * 1024 * 1024, // 3MB
      maxEntrypointSize: 3 * 1024 * 1024, // 3MB
      hints: "warning",
    };
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
