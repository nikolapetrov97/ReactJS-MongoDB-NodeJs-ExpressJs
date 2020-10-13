const express = require('express')
const { addItemToCart } = require('../controller/cart');
const { requireSingin, userMiddleware } = require('../common-middleware');
const router = express.Router()

router.post('/user/cart/addtocart', requireSingin, userMiddleware, addItemToCart);
router.get('/user/cart/getcart', /*requireSingin, userMiddleware,*/     addItemToCart);

module.exports = router