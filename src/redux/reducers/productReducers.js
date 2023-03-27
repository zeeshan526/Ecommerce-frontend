import { ActionTypes } from "../constants/actions-types";

const initialState={
    products:[],
  
    // cartItems:[],
    // counter:0,
}


export const productReducers=(state = initialState ,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
          return {...state,products:payload};
        default:
            return state;
    }

}



export const selectedProductReducers=(state ={} ,{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
          return {...state, ...payload};
          case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }

}

// export const addToCartReducer=(state = initialState.counter ,{type,payload})=>{
//     switch (type) {
//         case ActionTypes.Add_TO_CART:
//           return state + 1
//         default:
//             return state;
//     }

// }


// export const cartReducer=(state = initialState, action)=> {
//     switch(action.type) {
//       case ActionTypes.Add_TO_CART:
//         return {
//           ...state,
//           cartItems: [...state.cartItems, action.payload]
//         };
//     //   case REMOVE_FROM_CART:
//     //     return {
//     //       ...state,
//     //       cartItems: state.cartItems.filter(item => item.id !== action.payload)
//     //     };
//       default:
//         return state;
//     }
//   }
