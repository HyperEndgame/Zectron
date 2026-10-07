import type { NextConfig } from 'next'

// Portfolio lives in its own Railway service (HyperEndgame/portfolio)
const PORTFOLIO = 'https://portfolio-production-7224.up.railway.app'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/portfolio', destination: `${PORTFOLIO}/portfolio/` },
      { source: '/portfolio/:path*', destination: `${PORTFOLIO}/portfolio/:path*` },
    ]
  },
}

export default nextConfig
