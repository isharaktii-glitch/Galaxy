/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TypeScript errors තිබුණත් බිල්ඩ් එක දිගටම කරගෙන යන්න Vercel එකට අවසර දීම
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint errors තිබුණත් බිල්ඩ් එක දිගටම කරගෙන යන්න අවසර දීම
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
