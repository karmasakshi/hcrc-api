/**
 * Admin.js
 *
 * @description :: Admins.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        attributes: {
            // Username of the admin
            username: {
                type: 'string',
                required: true,
                size: 20
            },
            // Hashed password of the admin
            password: {
                type: 'string',
                required: true
            },
            // Sessions associated with the admin
            sessions: {
                collection: 'session',
                via: 'admin'
            },
            // Active flag
            active: {
                type: 'boolean',
                defaultsTo: 1
            }
        },
        schema: true
    }
};

