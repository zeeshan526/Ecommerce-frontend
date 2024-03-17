import { ActionTypes } from "../constants/actions-types";

const initialState = {
  itemCount:0,
  cartItems: [],
  totalPrice:0,
};

export const cartReducer = (state = initialState, action) => {
  debugger;
  // console.log("state", state);
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
          itemCount: state.itemCount + 1,
          totalPrice: state.totalPrice + action.payload.price 
        };
      } else {
        // item does not exist in cart
        const newCartItem = { ...action.payload, count: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
          itemCount: state.itemCount + 1,
          totalPrice: state.totalPrice + (action.payload.price * newCartItem.count)

        };
      }
      case ActionTypes.REMOVE_FROM_CART:
        const removedItemId = action.payload;
        const removedItem = state.cartItems.find(item => item.id === removedItemId);
        let itemCount = 0;
        if (removedItem) {
          itemCount = state.cartItems.reduce((count, item) => {
            if (item.id === removedItemId) {
              console.log('count:', count, 'item.quantity:', item.count);
              return count + item.count;
            }
            return count;
          }, 0);
        }
      
        const filteredCartItems = state.cartItems.filter(item => item.id !== removedItemId);
      
        return {
          ...state,
          cartItems: filteredCartItems,
          itemCount: state.itemCount - itemCount,
          totalPrice: state.totalPrice - (removedItem.price * itemCount),
        };
            

//increment and decrement quantity

        case ActionTypes.INCREMENT_ITEM_COUNT:
          const incrementedCart = state.cartItems.map(item => {
            if (item.id === action.payload) {
              return {
                ...item,
                count: item.count + 1
              };
            } else {
              return item;
            }
          });
          return {
            ...state,
            cartItem: incrementedCart,
            itemCount: state.itemCount + 1
          };
        case ActionTypes.DECREMENT_ITEM_COUNT:
          const decrementedCart = state.cartItems.map(item => {
            if (item.id === action.payload) {
              return {
                ...item,
                count: item.count - 1
              };
            } else {
              return item;
            }
          });
          return {
            ...state,
            cartItem: decrementedCart,
            itemCount: state.itemCount - 1
          };




          // case action.LOAD_CART_FROM_STORAGE:
          //   return {
          //     ...state,
          //     ...action.payload // Update the state with cart data from the payload
          //   };

          case ActionTypes.LOAD_CART_FROM_STORAGE:
            return {
              ...state,
              cartItems: action.payload,
              itemCount: action.payload.reduce((total, item) => total + (item.count || 0), 0),
              totalPrice: action.payload.reduce((total, item) => total + ((item.price || 0) * (item.count || 0)), 0)
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
