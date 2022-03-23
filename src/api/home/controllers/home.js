"use strict";

/**
 *  home controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany("api::home.home", {
      ...query,
      populate: {
        specialities: {
          populate: {
            backgroundImage: true,
            image: true,
            specialities: {
              populate: {
                image: true,
              },
            },
          },
        },
        contactSection: {
          populate: {
            contactModule: {
              populate: {
                icon: true,
              },
            },
            map: {},
          },
        },
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
