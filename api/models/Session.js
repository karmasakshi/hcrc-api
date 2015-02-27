/**
 * Session.js
 *
 * @description :: Sessions.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Admin the session belongs to
        admin: {
            model: 'admin',
            required: true
        },
        // IP address of the admin
        ipaddress: {
            type: 'string',
            required: true,
            size: 15
        },
        // User agent string of the admin
        uastring: {
            type: 'text',
            required: true
        },
        // Active flag
        active: {
            type: 'boolean',
            defaultsTo: 1
        }
    },
    schema: true
};

