'use strict';

const got = require('got');
const config = require('../config');

function Message(user, token) {
    if (!user || !token) {
        throw new TypeError('User and token must be defined!');
    }

    this.user = user;

    this.token = token;
}

Message.prototype = {
    push: function(message, params) {
        if (!message) {
            throw new TypeError('You need to provide a message!');
        }

        if (!params) {
            params = {};
        }

        params.message = message;

        params.user = this.user;

        params.token = this.token;

        return this.post(params);
    },

    post: function(params) {
        return got(params.api || config.api.message, {
            method: 'POST',
            body: params
        })
        .then(res => JSON.parse(res.body))
        .catch(err => err);
    }
};

module.exports = Message;
