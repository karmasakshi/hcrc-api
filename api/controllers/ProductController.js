/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    topselling: function (req, res) {
        // Request parameters
        var count = req.hasOwnProperty('count') ? req.count : 10;
        var date = req.hasOwnProperty('date') ? {
            after: req.date.after,
            before: req.date.before
        } : null;

        async.waterfall([
            // Get invoices
            function (callback) {
                var query = '';

                if (date !== null) {
                    query = {active: 0, type: 'sale', date: {'>': new Date(req.date.after), '<': new Date(req.date.before)}};
                } else {
                    query = {active: 0, type: 'sale'};
                }

                Invoice.find(query, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                });
            },
            // Get products
            function (invoices, callback) {
                Product.query("select product.name, sum(_invoiceproduct.quantity) as 'units sold' from product inner join _invoiceproduct on product.id = _invoiceproduct.product inner join invoice on _invoiceproduct.invoice = invoice.id where invoice.active = 1 and invoice.type = 'sale' group by _invoiceproduct.product", function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                });
            }
        ], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    },
    inventory: function (req, res) {

        async.waterfall([
            // Get invoices
            function (callback) {
                var query = '';

                if (date !== null) {
                    query = {active: 0, type: 'sale', date: {'>': new Date(req.date.after), '<': new Date(req.date.before)}};
                } else {
                    query = {active: 0, type: 'sale'};
                }

                Invoice.find(query, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                });
            },
            // Get products
            function (invoices, callback) {
                Product.query("select product.name, sum(_invoiceproduct.quantity) as 'units sold' from product inner join _invoiceproduct on product.id = _invoiceproduct.product inner join invoice on _invoiceproduct.invoice = invoice.id where invoice.active = 1 and invoice.type = 'sale' group by _invoiceproduct.product", function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                });
            }
        ], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    },
    averagecp: function (req, res) {
        // get all invoices that are complete and type purchase and in a date range
        // get all prices and quantity
        // return average
        return res.json({
            todo: 'Not implemented yet!'
        });
    },
    averagesp: function (req, res) {
        // get all invoices that are complete and type sale and in a date range
        // get all products and count
        // return value
        return res.json({
            todo: 'Not implemented yet!'
        });
    }
};

