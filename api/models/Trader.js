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
        // Invoices associated with the trader
        invoices: {
            collection: 'invoice',
            via: 'trader'
        },
        // Active flag
        active: {
            type: 'boolean',
            defaultsTo: 1
        }
    },
    schema: true
};