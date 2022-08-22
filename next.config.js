/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "source.unsplash.com",
      "cdn.sanity.io",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "adn-static1.nykaa.com",
    ],
  },
};

module.exports = nextConfig;
