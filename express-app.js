var loremIpsum = require('lorem-ipsum'),
  output = loremIpsum();
const express = require('express');
const app = express();
const path = require('path');



app.get('/', function(req, res) {
  res.send(loremIpsum({

    }

  ));
})

app.get('/lorem', function(req, res) {
  res.send(loremIpsum({
    count: 3,
    units: 'paragraphs',
    format: 'html'
  }))

})

app.listen(3000, function() {
  console.log("Oh Hai! Check out http://0.0.0.0:3000")
})
