/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const { i18n } = require('./next-i18next.config');
module.exports = nextConfig

module.exports = {

  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    STRAPI_PAGINATION: process.env.STRAPI_PAGINATION,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    IMAGES_STRAPI_URL: process.env.IMAGES_STRAPI_URL,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY
  },

  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },
  i18n,

}
