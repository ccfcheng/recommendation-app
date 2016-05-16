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

// TODO: Import Firebase into this module, set up to scrape all restaurants in a
// given radius for a specific city, store in database under qualified city name
// TODO: Change what we export here to give back proper results from database
