import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clashofclans-layouts.com',
      },
      {
        protocol: 'https',
        hostname: 'apiclasherspace.riski.me',
      },
    ],
  },
}

export default nextConfig
