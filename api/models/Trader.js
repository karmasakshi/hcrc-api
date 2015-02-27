/**
 * Trader.js
 *
 * @description :: Traders.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Name of the trader
        name: {
            type: 'string',
            required: true,
            size: 80,
            unique: true
        },
        // Phone number(s) of the trader
        phones: {
            type: 'string',
            size: 40
        },
        // Email address(es) of the trader
        emails: {
            type: 'string'
        },
        // Purchases associated with the trader
        purchases: {
            collection: 'invoice',
            via: 'buyer'
        },
        // Sales associated with the trader
        sales: {
            collection: 'invoice',
            via: 'seller'
        },
        // Active flag
        active: {
            type: 'boolean',
            defaultsTo: 1
        }
    },
    schema: true
};

