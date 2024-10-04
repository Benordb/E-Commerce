/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: process.env.API,
  },
  images: {
    domains: ['res.cloudinary.com', 'cdn.allbirds.com']
  }
};

export default nextConfig;
