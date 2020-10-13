import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generatePublicUrl } from '../../urlConfig';
import Layout from '../Layout';
import SideMenu from '../SideMenu/SideMenu';
import './ProductsBySlug.css'
import { getProductsBySlug } from '../../actions';

const ProductsBySlug = (props) => {

    const [slug, setSlug] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug));
        setSlug(match.params.slug)
    }, [props]);

    const slugProducts = useSelector(state => state.products);

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
                        <div class="btn">
                            <svg>
                                <rect x="0" y="0" fill="none" width="166" height="45" />
                            </svg>
                            Добави
                        </div>
                    </div>
                </div>
            )
        }
        return finalProducts;
    }

    return (
        <Layout>
            <div className="main">
                <SideMenu/>
                <div className="mainWrapper">
                    {renderProducts(slugProducts.products)}
                </div>
            </div>
        </Layout>

    )

}

export default ProductsBySlug;