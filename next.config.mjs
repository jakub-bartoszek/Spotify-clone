/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'misc.scdn.co',
    port: '',
   },
  ],
 },
};

export default nextConfig;
