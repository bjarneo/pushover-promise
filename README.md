pushover-promise
======
![Travis](https://travis-ci.org/bjarneo/pushover-promise.svg?branch=master)

Pushover.net API promise wrapper.  

Currently supporting only the message API.

Installation
------
It's available on npm.
```
npm install --save pushover-promise
```

API Documentation
------
* [https://pushover.net/api](https://pushover.net/api)

Usage
------
Basic
```js

import { Message } from 'pushover-promise';
// or
const Message = require('pushover-promise').Message;

const user = 'user';
const token = 'token';

const msg = new Message(user, token);

msg.push('Pushover message API is now as a promise')
.then(console.log)
.catch(console.error);

```

All included
```js
const Message = require('pushover-promise').Message;

const user = 'user';
const token = 'token';

const msg = new Message(user, token);

msg.push('Pushover message API is now as a promise', {
    title: 'Check out my package', // Optional
    url: 'http://www.npmjs.com/package/pushover-promise', // Optional
    url_title: 'package: pushover-promise', // Optional
    priority: 2, // Optional
    retry: 30, // Optional
    expire: 120 // Optional
})
.then(console.log)
.catch(console.error);
```

Missing pieces
------
* [https://pushover.net/api#verification](https://pushover.net/api#verification)
* [https://pushover.net/api#receipt](https://pushover.net/api#receipt)
* [https://pushover.net/api/subscriptions](https://pushover.net/api/subscriptions)
* [https://pushover.net/api/groups](https://pushover.net/api/groups)
* [https://pushover.net/api/licensing](https://pushover.net/api/licensing)
* [https://pushover.net/api/client](https://pushover.net/api/client)

Tests
------
```bash
$ npm test
```

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
