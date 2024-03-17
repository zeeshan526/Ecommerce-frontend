import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  removeSelectedProducts,
  selectedProducts,
  AddToCart,
  // incrementItemCount,
  // decrementItemCount,
} from "../../redux/actions/productActions";

export default function ProductDetails() {
  const products = useSelector((state) => state.product);
  const { title, price, image } = products;

  const { productid } = useParams();
  const dispatch = useDispatch();
  console.log(productid);
  console.log("selected_product", products);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .then((response) => {
        //   console.log(response.data);

        dispatch(selectedProducts(response.data));
      });
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productid, dispatch]);

  const addToCart = () => {
    console.log("add to cart");
    debugger;
  
    if (!!products?.id) {
      // Retrieve the existing cart from local storage
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Check if the product already exists in the cart
      const existingProductIndex = existingCart.findIndex(p => p.id === products.id);
      if (existingProductIndex >= 0) {
        // If the product exists, update the quantity or other properties as needed
        existingCart[existingProductIndex] = {...existingCart[existingProductIndex], count: (existingCart[existingProductIndex].count || 0) + 1};
      } else {
        // If the product doesn't exist, add it to the cart
        existingCart.push({...products, count: 1});
      }
  
      // Save the updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(existingCart));
  
      // Dispatch the action to add to cart
      dispatch(AddToCart(products));
    }
  };
  

  // const handleIncrement = (id) => {
  //   dispatch(incrementItemCount(id));
  // };

  // const handleDecrement = (id) => {
  //   dispatch(decrementItemCount(id));
  // };

  return (
    <div className="datail-container">
      {Object.keys(products).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="detail-warpper-container">
          <div className="detail-items">
            <img src={image} alt="" />
          </div>

          <div className="detail-wrapper">
            <h3 className="detail-title">{title}</h3>
            <div className="k-row">
              <h5>Warrenty: </h5>
              <p>1 Year</p>
            </div>
            <div className="k-row">
              <h5>Price: </h5>
              <p>{price}</p>
            </div>
            <div>
              {/* <button onClick={() => handleIncrement(products?.id)}>
                increase
              </button>
              <span> </span>
              <button onClick={() => handleDecrement(products?.id)}>
                decrease
              </button> */}
            </div>
            {/* <p className='detail-price'>Price: {price}</p> */}
            <button className="Add-To-Cart-btn" onClick={() => addToCart()}>
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
