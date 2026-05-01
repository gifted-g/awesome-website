/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ← THIS IS CRITICAL
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;