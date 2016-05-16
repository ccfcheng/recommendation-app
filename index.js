const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const yelp = require('./server/Yelp');

const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// get an instance of the express Router
const router = express.Router();

// TODO: Change behavior here when we change Yelp module to scrape data and
// save into Firebase instead of returning straight from Yelp API

router.get('/search', function(req, res) {
  yelp.search(req.query)
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      return error;
    });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.use(express.static(path.join(__dirname,'/dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, function() {
});
