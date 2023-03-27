import { ActionTypes } from "../constants/actions-types";

export const setproducts=(products)=>{
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}



export const selectedProducts=(product)=>{
    return {
      type: ActionTypes.SELECTED_PRODUCTS,
      payload: product,
    }
  }

  export const removeSelectedProducts=()=>{
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
      
    }
  }




  export const AddToCart=(product)=>{
    debugger
    return {
      type: ActionTypes.Add_TO_CART,
      payload: product,
    }
  }