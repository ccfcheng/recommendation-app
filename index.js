const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
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

const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// get an instance of the express Router
const router = express.Router();

router.get('/search', function(req, res) {
    console.log(req.method, 'with query', req.query);
    yelp.search(req.query)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(error) {
        console.log('yelp error:', error);
      });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.use(express.static(path.join(__dirname,'/dist')));

console.log('NODE_ENV set to:', app.get('env'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, function(){
  console.log('Started listening on port', port);
});

