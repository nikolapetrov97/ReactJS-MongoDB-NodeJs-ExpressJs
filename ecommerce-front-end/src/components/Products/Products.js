import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryAndProducts } from '../../actions';
import { addToCart } from '../../actions';
import { generatePublicUrl } from '../../urlConfig';
import Layout from '../Layout';
import SideMenu from '../SideMenu/SideMenu';
import './Products.css'

const Products = () => {

    const quantity = 1;
    // const [id, setId] = useState(false);
    // const [price, setPrice] = useState(null);
    const storeProducts = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryAndProducts())
    }, []);

    const addProduct = (product, quantity, price) => {
        const cartItems =
        {
            product,
            quantity,
            price
        }
        console.log(cartItems.product)
        console.log(cartItems.quantity)
        console.log(cartItems.price)

        dispatch(addToCart(cartItems));
    }

    const renderProducts = (products) => {

        let finalProducts = [];
        for (let product of products) {
            finalProducts.push(
                <div class="productWrapper">
                    {product.productPictures ?
                        product.productPictures.map((picture, index) =>
                            index == 0 ?
                                <img src={generatePublicUrl(picture.img)} /> : null)
                        : null}
                    <div class="productDetails">
                        <div class="title">{product.name}</div>
                        <span class="price">{product.price} лв.</span>
                        <div class="productbtn">
                            <svg>
                                <rect x="0" y="0" fill="none" width="166" height="45" />
                            </svg>
                            Добави
                        </div>
                    </div>
                </div>
            )

            // addProduct(product._id, quantity, product.price)
        }
        return finalProducts;
    }

    return (
        <Layout>
            <div className="main">
                <SideMenu />
                <div className="mainWrapper">
                    {renderProducts(storeProducts.products)}
                </div>
            </div>
        </Layout>

    )

}

export default Products;