const express = require('express');
const app = express()
const PORT = 4001
const getProducts = require(`./getProducts`)
const getProduct = require(`./getProduct`)

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});