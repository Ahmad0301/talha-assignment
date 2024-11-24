const express = require('express');
const app = express();
const data = require('./data')


app.get('/api/books', (req, resp) => 
{
    resp.json(data.books);
});
