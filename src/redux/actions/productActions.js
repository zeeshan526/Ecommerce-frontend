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




  export const AddToCart=(item)=>{
    return {
      type: ActionTypes.Add_TO_CART,
      payload: item,
    }
  }

  
  export const removeFromCart = (itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: itemId
  });
  