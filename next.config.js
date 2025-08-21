/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  turbopack: true,
  // set turbopack.root to the project folder to avoid workspace root warnings
  turbopackRoot: __dirname,
  },
  images: {
    domains: ["via.placeholder.com"],
  },
};

module.exports = nextConfig;
