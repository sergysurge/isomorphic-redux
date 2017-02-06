'use strict';

require('babel-core/register')({});
require('babel-polyfill');

var server = require('./server').default;

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log('S3rv3r l1st3n1ng 0n: ' + PORT);
});
