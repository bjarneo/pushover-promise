'use strict';

const assert = require('assert');
const express = require('express');
const bodyParser = require('body-parser');

const Message = require('../index').Message;

describe('#Message', function() {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));

    before(function(done) {
        app.post('/1/message.json', function(req, res) {
            res.json(req.body);
        });

        app.listen(3000);

        done();
    });

    it('should post all the things', function(done) {
        const msg = new Message('user', 'token');

        msg.push('Pushover message API is now as a promise', {
            api: 'http://localhost:3000/1/message.json',
            title: 'Check out my package',
            url: 'http://www.npmjs.com/package/pushover-promise',
            url_title: 'package: pushover-promise', // eslint-disable-line
            priority: 2,
            retry: 30,
            expire: 120
        })
        .then(res => {
            assert(res.message === 'Pushover message API is now as a promise');
            assert(res.title === 'Check out my package');
            assert(res.url === 'http://www.npmjs.com/package/pushover-promise');
            assert(res.url_title === 'package: pushover-promise');
            assert(res.priority === '2');
            assert(res.retry === '30');
            assert(res.expire === '120');

            done();
        })
        .catch(console.error); // eslint-disable-line
    });
});
