/**
 * Session.js
 *
 * @description :: Sessions.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // User the session belongs to
        user: {
            model: 'user',
            required: true
        },
        // IP address of the user
        ipaddress: {
            type: 'string',
            required: true,
            size: 15
        },
        // User agent string of the user
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

