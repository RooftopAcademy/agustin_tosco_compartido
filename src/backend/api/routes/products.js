const express = require('express');
const router = express.Router();
const products = require('../data/products.json')

router.get('/', (req, res) => {
    res.send(products);
})

router.get('/:id', (req, res) => {
    product = products.find(product => product.id == req.params.id)
    res.send(product);
})

module.exports = router;
