'use strict';

/**
 * open-source router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::open-source.open-source');
