import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { productReducers,selectedProductReducers,  } from "./productReducers";




const reducers=combineReducers({
    allProducts: productReducers,
    product: selectedProductReducers,
    cart: cartReducer

})


export default reducers
