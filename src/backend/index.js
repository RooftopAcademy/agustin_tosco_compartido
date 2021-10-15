const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const products = require('./api/routes/products');
const categories = require('./api/routes/categories');

dotenv.config();
const port = process.env.port;

app.use(express.static('public'));
app.use('/products', products);
// app.use('/categories', categories);

app.locals.baseUrl = process.env.HOST + ':' + port;

app.get('/', (req, res) => {
    let file = resolve("src", "views", "index.html")
    res.sendFile(file);
})

app.get('/products-list', (req, res) => {
    let file = path.resolve("src", "views", "product-list.html")
    res.sendFile(file);
})

app.get('/product-details', (req, res) => {
    let file = path.resolve("src", "views", "product-details.html")
    res.sendFile(file);
})

app.listen(port);
console.log((`Server running on port ${port}`));
