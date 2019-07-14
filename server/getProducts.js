// const getProducts = require(`./getProducts`);

// let getProducts = ('/api/products', (req,res)=> {
//     res.status(200).send(products)
// })

// module.exports = getProducts

const products = require('../products.json');

const getProducts = (req, res) => {
    if(req.query.price){                                   //when I use + instead of parseInt I get different results
        const itemss = products.filter(val => val.price >= parseInt(req.query.price))
        return res.status(200).send(itemss)
    }
    res.status(200).send(products);
}


module.exports = getProducts;