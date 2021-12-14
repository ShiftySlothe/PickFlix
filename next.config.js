/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    TMDB_IMAGE_URL: process.env.TMDB_IMAGE_URL,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};
