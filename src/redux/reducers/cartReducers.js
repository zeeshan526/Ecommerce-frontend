import { ActionTypes } from "../constants/actions-types";

const initialState = {
  itemCount:0,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  debugger;
  console.log("state", state);
  switch (action.type) {
    case ActionTypes.Add_TO_CART:
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // item already exists in cart
        const updatedCart = [...state.cartItems];
        updatedCart[existingItemIndex].count += 1;
        return {
          ...state,
          cartItems: updatedCart,
          itemCount: state.itemCount + 1
        };
      } else {
        // item does not exist in cart
        const newCartItem = { ...action.payload, count: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
          itemCount: state.itemCount + 1
        };
      }
    case ActionTypes.REMOVE_FROM_CART:
      const filteredCart = state.cartItems.filter(item => item.id !== action.payload);
      return {
        ...state,
        cartItems: filteredCart,
        itemCount: state.itemCount - 1
      };

//increment and decrement quantity

        // case ActionTypes.INCREMENT_ITEM_COUNT:
        //   const incrementedCart = state.cartItems.map(item => {
        //     if (item.id === action.payload) {
        //       return {
        //         ...item,
        //         count: item.count + 1
        //       };
        //     } else {
        //       return item;
        //     }
        //   });
        //   return {
        //     ...state,
        //     cartItem: incrementedCart,
        //     itemCount: state.itemCount + 1
        //   };
        // case ActionTypes.DECREMENT_ITEM_COUNT:
        //   const decrementedCart = state.cartItems.map(item => {
        //     if (item.id === action.payload) {
        //       return {
        //         ...item,
        //         count: item.count - 1
        //       };
        //     } else {
        //       return item;
        //     }
        //   });
        //   return {
        //     ...state,
        //     cartItem: decrementedCart,
        //     itemCount: state.itemCount - 1
        //   };












    default:
      return state;
  }
};
// // export const cartReducer=(state = initialState ,{type,payload})=>{
// //     debugger
// //     switch (type) {

// //         case ActionTypes.Add_TO_CART:
// //           return {...state,cartItems:payload};
// //         default:
// //             return state;
// //     }

// // }
