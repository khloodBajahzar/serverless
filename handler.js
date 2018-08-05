"use strict";

module.exports.hello = (event, context, cb) => {
  console.log(event);
  return cb(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: 'Hello World!'
  });
}
