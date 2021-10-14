const express = require('express');
const app = express();
const PORT = 3002;
const path = require('path');


let products = [
    {
     "name": "El Inversor Inteligente",
     "price": 123,
     "description": "",
     "stock": 12,
     "id": 1,
     "image": "",
     "category": 2
    },
    {
     "name": "Security Analysis",
     "price": 123,
     "description": "",
     "stock": 12,
     "id": 4,
     "image": "",
     "category": 2
    },
    {
     "name": "FreeAgent",
     "price": 123,
     "description": "",
     "stock": 15,
     "id": 7,
     "image": "",
     "category": 3
    },
    {
     "name": "Finanzas personales",
     "price": 223,
     "description": "",
     "stock": 1,
     "id": 2,
     "image": "",
     "category": 1
    },
    {
     "name": "Personal & Family Financial Planning",
     "price": 223,
     "description": "",
     "stock": 12,
     "id": 5,
     "image": "",
     "category": 1
    },
    {
     "name": "AmiBroker",
     "price": 223,
     "description": "",
     "stock": 5,
     "id": 8,
     "image": "",
     "category": 3
    },
    {
     "name": "Introducción al Análisis Fundamental",
     "price": 1323,
     "description": "",
     "stock": 51,
     "id": 3,
     "image": "",
     "category": 2
    },
    {
     "name": "Xero",
     "price": 1323,
     "description": "",
     "stock": 15,
     "id": 6,
     "image": "",
     "category": 2
    },
    {
     "name": "NinjaTrader",
     "price": 1323,
     "description": "",
     "stock": 15,
     "id": 0,
     "image": "",
     "category": 3
    }
   ]

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

app.listen(PORT);
console.log((`Server running on port ${PORT}`));
