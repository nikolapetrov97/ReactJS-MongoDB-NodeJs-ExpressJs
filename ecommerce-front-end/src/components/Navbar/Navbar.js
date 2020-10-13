import React, { useState } from 'react'
import BurgerMenu from './BurgerMenu';
import './Navbar.css';
import SearchBar from './SearchBar';
import FavCart from './FavCart';


function Navbar() {
    

    return (
        <div className="navwrapper">
            <div className="navlogo">
                <i class="far fa-lemon fa-2x"></i>
            </div>
            
            <FavCart/>

            <BurgerMenu/>
 
        </div>

        
    )
}

export default Navbar;
