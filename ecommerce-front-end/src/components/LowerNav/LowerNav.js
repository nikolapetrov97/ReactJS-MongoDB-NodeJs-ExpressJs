import React from 'react'
import SearchBar from '../Navbar/SearchBar'
import './LowerNav.css'
import { Link } from 'react-router-dom'
function LowerNav() {

    return (
        <div className="lowernavwrapper">
            <Link className="category">
                <i className="fa fa-bars fa-lg"></i>
                <span>Категории</span>
            </Link>

            <Link to={`/`} className="link" >
                <span>Начало</span>
            </Link>

            <Link to={`/`} className="link">
                <span>Промоции</span>
            </Link>

            <Link to={`/`} className="link">
                <span>Ново</span>
            </Link>
            
            <Link to={`/`} className="link">
                <span>За нас</span>
            </Link>

            <SearchBar class="searchbarlower" inputName="searchbarinputlower" buttonName="searchbarbuttonlower" />
        </div>
    )
}

export default LowerNav;