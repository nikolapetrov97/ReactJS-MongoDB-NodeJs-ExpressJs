import { productConstants } from "../actions/constants";

const initialState = {
    products: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCT_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;

        case productConstants.GET_ALL_PRODUCT_FAILURE:
            state = {
                ...state,
                error: action.payload.products
            }
            break;

        case productConstants.GET_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products
            }
    }
    return state;
}