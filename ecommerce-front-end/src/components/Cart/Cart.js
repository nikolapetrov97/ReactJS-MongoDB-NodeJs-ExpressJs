import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Layout from '../Layout'
import './Cart.css'
import image from '../../images/thought-catalog-9aOswReDKPo-unsplash.jpg'


const Cart = () => {

    return (
        <Layout>
            <div>
                <div class="wrap cf">
                    <div class="heading cf">
                        <h1>Моята Количка</h1>
                        <Link to="/" class="continue">Продължи пазаруването</Link>
                    </div>
                    <div class="cart">
                        <ul class="cartWrap">
                            <li class="items odd">

                                <div class="infoWrap">
                                    <div class="cartSection">
                                        <img src={image} alt="" class="itemImg" />
                                        
                                        <h3>Item Name 1</h3>

                                        <p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>

                                        <p class="stockStatus"> In Stock</p>
                                    </div>


                                    <div class="prodTotal cartSection">
                                        <p>$15.00</p>
                                    </div>
                                    <div class="cartSection removeWrap">
                                        <a href="#" class="remove">x</a>
                                    </div>
                                </div>
                            </li> 
                        </ul>
                    </div>

                    <div class="promoCode"><label for="promo">Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
                        <a href="#" class="btn"></a></div>

                    <div class="subtotal cf">
                        <ul>
                            <li class="totalRow"><span class="label">Subtotal</span><span class="value">$35.00</span></li>

                            <li class="totalRow"><span class="label">Shipping</span><span class="value">$5.00</span></li>

                            <li class="totalRow"><span class="label">Tax</span><span class="value">$4.00</span></li>
                            <li class="totalRow final"><span class="label">Total</span><span class="value">$44.00</span></li>
                            <li class="totalRow"><a href="#" class="btn continue">Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart
