const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(parser.json());

app.use(express.static('public'));

app.get('/restaurants', (request, response) => {
  response.end();
});

app.listen(3002, () => console.log('Example app listening on port 3002!'));
