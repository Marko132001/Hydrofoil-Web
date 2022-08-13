'use strict';

/**
 * delta-one service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::delta-one.delta-one');
