const express = require("express");
const { getProducts, create, getSingleProduct, updateProduct, deleteProduct } = require("../../controllers/product-controller");
const productMiddleware = require('../../middlewares/product-middleware');


const router = express.Router();

router.post('/product/create', productMiddleware.validateProduct, create);

router.get('/products', getProducts);

router.get('/product/:id', getSingleProduct);

router.put('/product/update/:id', updateProduct);

router.delete('/product/delete/:id', deleteProduct);

module.exports = router;