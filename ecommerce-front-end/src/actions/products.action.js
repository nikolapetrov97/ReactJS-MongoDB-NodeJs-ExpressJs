import axios from "../helpers/axios";
import { categoryConstants, productConstants } from "./constants"

export const getCategoryAndProducts = () => {
    return async dispatch => {
        const res = await axios.post(`/initialdata`);
        if(res.status === 200){
            const { products } = res.data;
            dispatch({
                type: productConstants.GET_ALL_PRODUCT_SUCCESS,
                payload: { products }
            })
        }else {
            dispatch({
                type: productConstants.GET_ALL_PRODUCT_FAILURE,
                payload: { error: res.data.error }
            })
        }
        console.log(res)       
    }
}

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/product/${slug}`);
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            });
        }else{
            // dispatch({
            //     type: 
            // })
        }
    }
}