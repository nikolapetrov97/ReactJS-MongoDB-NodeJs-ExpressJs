const express = require('express')
//const {  } = require('../controller/category');
const { requireSingin, adminMiddleware } = require('../common-middleware');
const router = express.Router()
const { createProduct, getProductsBySlug } = require('../controller/product')
const multer = require('multer')
const shortId = require('shortid')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname), 'uploads') )
    },
    filename: function (req, file, cb) {
      cb(null, shortId.generate() + '-' + file.originalname)
    }
  })

  const upload = multer({ storage })

router.post('/product/create', requireSingin, adminMiddleware, upload.array('productPicture'), createProduct);
router.get('/product/:slug', getProductsBySlug);

//router.get('/category/getcategory', getCategories);


module.exports = router