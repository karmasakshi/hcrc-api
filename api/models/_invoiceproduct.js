/**
 * _invoiceproduct.js
 *
 * @description :: An intermediary model to effect "Many-to-Many Through" association between product and invoice models.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Invoice the entry belongs to
        invoice: {
            model: 'invoice',
            required: true
        },
        // Product the entry belongs to
        product: {
            model: 'product',
            required: true
        },
        // Number of units of the product
        quantity: {
            type: 'integer',
            required: true
        },
        // Price per unit of the product
        rate: {
            type: 'float',
            required: true
        }
    },
    schema: true
};

