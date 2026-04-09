/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

module.exports = {
  env: {
    ADWORDS_TAG: process.env.ADWORDS_TAG,
    ANALYTICS_TAG: process.env.ANALYTICS_TAG,
  },
  i18n,
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }
    return config;
  },
};
