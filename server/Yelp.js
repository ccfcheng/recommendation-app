var Yelp = require('yelp');

var YELP_CONSUMER_KEY = process.env.YELP_CONSUMER_KEY;
var YELP_CONSUMER_SECRET = process.env.YELP_CONSUMER_SECRET;
var YELP_TOKEN = process.env.YELP_TOKEN;
var YELP_TOKEN_SECRET = process.env.YELP_TOKEN_SECRET;

var yelp = new Yelp({
  consumer_key: YELP_CONSUMER_KEY,
  consumer_secret: YELP_CONSUMER_SECRET,
  token: YELP_TOKEN,
  token_secret: YELP_TOKEN_SECRET,
});

module.exports = {
  search: yelp.search
};
