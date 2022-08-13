'use strict';

/**
 * delta-one router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::delta-one.delta-one');
