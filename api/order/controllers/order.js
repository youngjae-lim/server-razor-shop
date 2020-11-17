"use strict";
const stripe = require("stripe")(
  "sk_test_51HnT4oJ7igKgEV3m0FtfNzfIXnuamZZJzpMzILeiDBb7l14Qs1gsBTQd5mxOYiRyUdk6Gn31zOaXeDws6tgtsq1800QkW4MSKe"
);
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (ctx) => {
    const { name, total, items, stripeTokenId } = ctx.request.body;
    const { id } = ctx.state.user;
    
    const charge = await stripe.charges.create({
      amount: Math.round(total * 100),
      currency: "usd",
      description: `Order ${new Date()} by ${ctx.state.user.username}`,
      source: stripeTokenId,
    });

    const order = await strapi.services.order.create({
      name,
      total,
      items,
      users_permissions_user: id,
    });

    return order;
  },
};
