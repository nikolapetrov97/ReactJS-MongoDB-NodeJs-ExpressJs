const express = require('express')
const { addCategory, getCategories } = require('../controller/category');
const { requireSingin, adminMiddleware } = require('../common-middleware');
const router = express.Router()
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
  });

  const upload = multer({ storage })

router.post('/category/create', upload.single('categoryImage'), requireSingin ,adminMiddleware, addCategory);
router.get('/category/getcategory', getCategories);


module.exports = router