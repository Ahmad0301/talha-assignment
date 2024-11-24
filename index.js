const express = require('express');
const app = express();
const data = require('./data')


app.get('/api/books', (req, resp) => 
{
    resp.json(data.books);
});

app.get('/api/books/available', (req, resp) =>
{
    const availableBooks = data.books.filter(book => book.isAvailable);
    resp.json(availableBooks);
});

