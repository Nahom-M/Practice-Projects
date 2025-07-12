/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nahom-others.s3.us-east-2.amazonaws.com',
        pathname: '**', // allows all paths from this domain
      },
    ],
  },
};

export default nextConfig;
