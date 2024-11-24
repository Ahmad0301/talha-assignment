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

app.get('/api/books/issued', (req, resp) =>
{
    const issuedBooks = data.books.filter(book => !book.isAvailable);
    resp.json(issuedBooks);
});

app.get('/api/books?author=AuthorName', (req, resp) => {
    const authorName = req.query.author;
    const booksByAuthor = data.books.filter(book => book.author);
     resp.json(booksByAuthor);
    
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
