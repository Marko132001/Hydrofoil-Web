'use strict';

/**
 * teredo-navalis service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::teredo-navalis.teredo-navalis');
