/**
 * Invoice.js
 *
 * @description :: Invoices.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Trader who bought the product(s)
        buyer: {
            model: 'trader',
            required: true
        },
        // Trader who sold the product(s)
        seller: {
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
        // Notes
        notes: {
            type: 'text'
        },
        // Complete flag
        complete: {
            type: 'boolean',
            defaultsTo: 0
        },
        addedBy: {
            model: 'admin',
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

