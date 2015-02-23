/**
 * Product.js
 *
 * @description :: Products being sold or bought.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Name of the product
        name: {
            type: 'string',
            required: true,
            size: 20,
            unique: true
        },
        // Unit of measurement
        unit: {
            type: 'string',
            required: true,
            size: 10
        },
        // Join entries
        _invoiceproducts: {
            collection: '_invoiceproduct',
            via: 'product'
        },
        // Active flag
        active: {
            type: 'boolean',
            defaultsTo: 1
        }
    },
    schema: true
};

