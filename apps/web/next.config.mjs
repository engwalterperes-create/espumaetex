/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.espumaetex.com.br' },
      { protocol: 'https', hostname: 'www.espumaetex.com.br' },
      { protocol: 'https', hostname: 'espumaetex.com.br' },
      { protocol: 'https', hostname: '*.r2.cloudflarestorage.com' },
      { protocol: 'https', hostname: '*.cloudfront.net' },
      { protocol: 'https', hostname: '*.vercel.app' },
    ],
  },
  async rewrites() {
    // Em produção (Vercel) o API_URL pode não estar setado ainda.
    // Sem rewrite, /api/* simplesmente retorna 404 — que é ok enquanto
    // o catálogo é estático.
    const apiUrl = process.env.API_URL;
    if (!apiUrl) return [];
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
