/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const { i18n } = require('./next-i18next.config');
module.exports = nextConfig

module.exports = {

  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    IMAGES_STRAPI_URL: process.env.IMAGES_STRAPI_URL
  },

  images: {
    domains: [process.env.IMAGES_DOMAIN, process.env.IMAGES_LOCAL],
  },
  i18n,

}
