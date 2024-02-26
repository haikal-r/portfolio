const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ["js", "jsx", "js", "jsx", "md", "mdx"],
  experimental: {
    webpackBuildWorker: true,
    serverActions: {
      enabled: true,
    },
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  redirects() {
    return [
      {
        source: "/about",
        destination: "/about/personal.js",
        permanent: true,
      },
      {
        source: "/activity",
        destination: "/activity/languages",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);