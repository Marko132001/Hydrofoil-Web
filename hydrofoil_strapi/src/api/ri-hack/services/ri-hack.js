'use strict';

/**
 * ri-hack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ri-hack.ri-hack');
