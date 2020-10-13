import axios from "../helpers/axios";
import { cartConstants } from "./constants"

export const addToCart = (product) => {

    return async dispatch => {
        const res = await axios.post('/user/cart/addtocart', {...product });
        console.log(res);
    }
}
