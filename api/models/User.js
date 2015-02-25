/**
 * User.js
 *
 * @description :: Users.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Username of the user
        username: {
            type: 'string',
            required: true,
            size: 20
        },
        // Hashed password of the user
        password: {
            type: 'string',
            required: true
        },
        // Sessions associated with the user
        sessions: {
            collection: 'session',
            via: 'user'
        },
        // Active flag
        active: {
            type: 'boolean',
            defaultsTo: 1
        }
    },
    schema: true
};

