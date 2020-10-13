const Product = require('../models/product')
const shortId = require('shortid')
const slugify = require('slugify')
const Category = require('../models/category')

exports.createProduct = (req, res) => {

    //res.status(200).json({ file: req.files, body: req.body })
    const {
        name, price, quantity, description, category, createdBy
    } = req.body
    
    let productPictures = []

    if( req.files.length > 0 ) {
        productPictures = req.files.map(file => {
            return { img: file.filename }
        })
    }

    const product = new Product({
        name: req.body.name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy: req.user._id
    })

    product.save(((error, product)=>{
        if(error) return res.status(400).json({error})

        if(product){
            res.status(201).json({ product })
        }
    }))
};

exports.getProductsBySlug = (req, res) => {
    const { slug } = req.params;
    Category.findOne({ slug: slug })
    .select('_id')
    .exec((error, category) => {
        if(error){
            return res.status(400).json({error})
        }
        if(category){
            Product.find({ category: category._id })
            .exec((error, products) => {
                res.status(200).json({products});
            })
        }
        
    })
}