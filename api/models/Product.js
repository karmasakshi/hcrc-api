/**
 * Product.js
 *
 * @description :: Products.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Name of the product
        name: {
            type: 'string',
            required: true,
            size: 80,
            unique: true
        },
        // Unit of measurement
        unit: {
            type: 'string',
            defaultsTo: 'unit',
            size: 20
        },
        defaultprice: {
            type: 'float',
            defaultsTo: 0
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

