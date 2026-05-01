import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// THIS LINE GOES AT THE VERY TOP OF THE FILE
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js to work with Cloudflare (static export)
  output: 'export',
  
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Don't optimize images (required for static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;