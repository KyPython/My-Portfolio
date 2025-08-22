import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: true,
    // set turbopack.root to the project folder to avoid workspace root warnings
    turbopackRoot: __dirname,
  },
  images: {
    domains: ["via.placeholder.com", "i.pravatar.cc"],
  },
};

export default nextConfig;