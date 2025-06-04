import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

   // 画像の最適化を無効化（ローカル開発用）
  images: {
    unoptimized: true,
  },

  // /images/* へのリクエストをバックエンドにプロキシ
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'http://localhost:8000/images/:path*',
      },
    ];
  },
};

export default nextConfig;
