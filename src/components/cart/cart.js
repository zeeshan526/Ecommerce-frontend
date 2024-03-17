import React from "react";
import "../cart/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
import empty from "../../images/empty.jpg";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  // const totalPrice = useSelector((state) => state.cart);

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  console.log("item", cart);
  return (
    <div className="car-page">
      <div className="cart-wrapper">
        <div>
          {cart.cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-img">
                <img src={empty} alt="" />
              </div>
              <p className="p1">Your Cart is empty</p>
              <p className="p2">
                Before proceed to checkout you must add some products to your
                shopping cart. You will find a lot of interesting products on
                our "Shop" page.
              </p>
              <div className="return-btn">
                <Link to="/">
                  <button>Return to Shop</button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <table>
                <tr>
                  <th>Product</th>
                  <th className="table-headings">Product Name</th>
                  <th className="table-headings">Price</th>
                  <th className="table-headings">Total</th>
                  <th className="table-headings">Remove</th>
                </tr>

                {cart.cartItems.map((item) => (
                  <tr key={item.id} style={{ borderBottom: "1px solid grey" }}>
                    <td>
                      <img style={{ width: "50px" }} src={item.image} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{parseFloat(item.price) * parseInt(item.count)}</td>
                    <td>
                      <button onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              <div style={{ textAlign: "right" }}>
                <div className="subtotal">
                  <p>Subtotal: {cart.totalPrice}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Link to="/thankYou">
                    <div className="checkout-btn">Checkout</div>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
