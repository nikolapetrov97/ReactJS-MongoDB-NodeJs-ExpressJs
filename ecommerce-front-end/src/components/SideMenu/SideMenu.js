import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMainCategories } from '../../actions';
import { Link } from 'react-router-dom'
import './SideMenu.css'


const SideMenu = () => {

    const [categories, setCategories] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const storeCategories = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMainCategories())
    }, []);


    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <Link className="linkWrapper" to={`/${category.slug}`} style={{ textDecoration: 'none', listStyle: 'none' }} key={category.name}>
                    <span style={{ color: 'black' }}>{category.name}</span>
                    <i class="fas fa-caret-right"></i>
                </Link>
            );
        }

        return myCategories;
    }

    return (

        <div className="sidemenu">
            {renderCategories(storeCategories.categories)}
        </div>
    );
}

export default SideMenu;

