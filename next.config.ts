import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Убираем статический экспорт для поддержки API routes
  // output: 'export',
  trailingSlash: true,
  images: {
    // Для Vercel можно использовать оптимизированные изображения
    unoptimized: false,
    domains: ['40gate.com'],
  },
  // SEO оптимизация
  compress: true,
  generateEtags: true,
  poweredByHeader: false,
  
  // Настройки для production
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
