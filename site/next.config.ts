import type { NextConfig } from 'next';

const staticExport = process.env.STATIC_EXPORT === '1';

const baseConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
};

const nextConfig: NextConfig = staticExport
  ? {
      ...baseConfig,
      output: 'export',
      images: { unoptimized: true },
    }
  : {
      ...baseConfig,
      distDir: process.env.NEXT_DIST_DIR ?? '.next',
      async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              { key: 'X-Content-Type-Options', value: 'nosniff' },
              { key: 'X-Frame-Options', value: 'DENY' },
              { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
              { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
            ],
          },
        ];
      },
    };

export default nextConfig;
