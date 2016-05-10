const Yelp = require('yelp');

const YELP_CONSUMER_KEY = process.env.YELP_CONSUMER_KEY;
const YELP_CONSUMER_SECRET = process.env.YELP_CONSUMER_SECRET;
const YELP_TOKEN = process.env.YELP_TOKEN;
const YELP_TOKEN_SECRET = process.env.YELP_TOKEN_SECRET;

const yelp = new Yelp({
  consumer_key: YELP_CONSUMER_KEY,
  consumer_secret: YELP_CONSUMER_SECRET,
  token: YELP_TOKEN,
  token_secret: YELP_TOKEN_SECRET,
});

module.exports = yelp;
