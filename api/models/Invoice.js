/**
 * Invoice.js
 *
 * @description :: Invoices.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Indicates a sale or purchase
        type: {
            type: 'string',
            enum: ['purchase', 'sale'],
            required: true
        },
        // Trader who bought/sold the product(s)
        trader: {
            model: 'trader',
            required: true
        },
        // Amount buyer owes to seller
        credit: {
            type: 'float',
            defaultsTo: 0
        },
        // Money transferred to seller in cash against product(s) bought
        cash: {
            type: 'float',
            defaultsTo: 0
        },
        // Money transferred to seller against product(s) bought in modes other than cash
        noncash: {
            type: 'float',
            defaultsTo: 0
        },
        // Amount discounted for the buyer
        discount: {
            type: 'float',
            defaultsTo: 0
        },
        // Note
        note: {
            type: 'text'
        },
        addedby: {
            model: 'admin',
            required: true
        },
        date: {
            type: 'date',
            required: true
        },
        // Join entries
        _invoiceproducts: {
            collection: '_invoiceproduct',
            via: 'invoice'
        },
        // Active flag
        active: {
            type: 'boolean',
            defaultsTo: 1
        }
    },
    schema: true
};