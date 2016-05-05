var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'/dist')));

console.log('NODE_ENV set to:', app.get('env'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, function(){
  console.log('Started listening on port', port);
});
