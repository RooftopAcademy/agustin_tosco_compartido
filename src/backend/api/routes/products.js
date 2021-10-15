const express = require('express');
const router = express.Router();
// const path = require('path');
const products = require('C:/projects/rooftop-academy/class-07sep/agustin_tosco_compartido/src/backend/api/routes/products.json')

router.get('/', (req, res) => {
    res.send(products);
})

router.get('/:id', (req, res) => {
    product = products.find(product => product.id == req.params.id)
    res.send(product);
})

module.exports = router;
