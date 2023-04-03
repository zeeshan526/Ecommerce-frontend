import React from "react";
import "../cart/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/productActions";

function Cart() {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart.cartItems);

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  console.log("item", cartItem);
  return (
    <div className="car-page">
      <div className="cart-wrapper">
        <div>
          <table>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
            {cartItem.map((item) => (
              <tr key={item.id}>
                <td><img style={{width:'50px'}} src={item.image} alt=""/></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>Total</td>
                <td>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
