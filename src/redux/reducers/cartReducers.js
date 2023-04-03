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
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        itemCount: state.itemCount + 1

        

      };
       case ActionTypes.REMOVE_FROM_CART:
         return {
           ...state,
           cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
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
