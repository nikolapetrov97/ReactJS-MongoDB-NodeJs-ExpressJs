import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function FavCart() {
    return (
        <div className="favcart">
            <div className="favcartwide">

                <Link to='/user/signin' className="userlink" style={{ textDecoration: 'none' }}>
                    <PersonOutlineIcon className="usericon" style={{ fontSize: 35 }} />
                    <span className="favcartspan">
                    Моят Профил <i class="fas fa-caret-down"></i>
                    </span>
                </Link>

                <Link to='/favourites' className="heartlink" style={{ textDecoration: 'none' }}>
                    <FavoriteBorderOutlinedIcon className="heart" style={{ fontSize: 35 }} />
                    <span className="favcartspan">
                        Любими <i class="fas fa-caret-down"></i>
                    </span>
                </Link>
            

                <Link to='/user/cart' className="cartlink" style={{ textDecoration: 'none' }}>
                    <ShoppingCartOutlinedIcon className="shoppingcarticon" style={{ fontSize: 35 }} />
                    <span className="favcartspan">
                    Моята количка <i class="fas fa-caret-down"></i>
                    </span>
                </Link>
                
            </div>
            
            <div className="favcartnarrow">
                <Link to='/favourites' className="heartlink" style={{ textDecoration: 'none' }}>
                    <FavoriteBorderOutlinedIcon className="heart" style={{ fontSize: 35 }} />
                </Link>
                <Link to='/cart' className="cartlink" style={{ textDecoration: 'none' }}>
                    <ShoppingCartOutlinedIcon className="cart" style={{ fontSize: 35 }} />
                </Link>
            </div>
        </div>
    )
}

export default FavCart;