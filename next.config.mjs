/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {};
=======
const nextConfig = { 
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            pathname: '**',
          },
        ],
      },
};
>>>>>>> 0003d40 (edit todo)

export default nextConfig;
