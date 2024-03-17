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
  
  export const incrementItemCount = (itemId) => {
    return {
      type: 'INCREMENT_ITEM_COUNT',
      payload: itemId
    };
  };
  
  export const decrementItemCount = (itemId) => {
    return {
      type: 'DECREMENT_ITEM_COUNT',
      payload: itemId
    };
  };
  
// Example of loadCartFromStorage action
// export const loadCartFromStorage = () => {
//   // Attempt to retrieve the cart from local storage
//   const storedCart = localStorage.getItem('cart');
//   const cartData = storedCart ? JSON.parse(storedCart) : { itemCount: 0 };

//   return {
//       type: 'LOAD_CART_FROM_STORAGE',
//       payload: cartData
//   };
// };

export const loadCartFromStorage = () => {
  let storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  storedCart = storedCart.map(item => ({
    ...item,
    count: Number(item.count) || 0,
    price: Number(item.price) || 0
  }));
  return {
    type: ActionTypes.LOAD_CART_FROM_STORAGE,
    payload: storedCart
  };
};
