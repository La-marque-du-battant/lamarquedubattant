/** @type {import('next').NextConfig} */

//const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    //basePath: isProd ? '/la_marque_du_battant' : '',
    output: 'standalone',
    distDir: 'dist',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
