const express = require('express');
const app = express();
const PORT = 3002;
const path = require('path');

app.use(express.static('public'));

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

app.get('/products/get-products', (req, res) => {
    let file = path.resolve("src", "backend", "api", "products", "products.json")
    res.sendFile(file);
})

app.listen(PORT);
console.log((`Server running on port ${PORT}`));
