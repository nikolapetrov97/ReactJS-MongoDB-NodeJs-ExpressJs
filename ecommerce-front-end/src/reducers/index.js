import { combineReducers } from 'redux';
import categoryReducer from './category.reducer'
import productsReducer from './products.reducer'
import authReducer from './auth.reducer'
import cartReducer from './shoppingcart.reducer'



const rootReducer = combineReducers({
    category: categoryReducer,
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer
});

export default rootReducer;