// import { cartConstants } from "../actions/constants";

// const initState = {
//     cartProducts: [],
//     loading: false,
//     error: null
// };

// export default (state = initState, action) => {
    
//     console.log(action)

//     switch(action.type){
//         case cartConstants.ADD_PRODUCT_TO_CART_SUCCESS:
//             state = {
//                 ...state,
//                 cartProducts: action.payload.cartProducts
//             }
//             break;
//         case cartConstants.ADD_PRODUCT_TO_CART_REQUEST:
//             state = {
//                 ...state,
//                 loading: true
//             }
//             break;
//         case cartConstants.ADD_PRODUCT_TO_CART_FAILURE:
//             state = {
//                 ...initState,
//                 loading: false,
//                 error: action.payload.error
//             }
//             break;
//     }
//     return state;
// }