import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  removeSelectedProducts,
  selectedProducts,
  AddToCart,
  // incrementItemCount,
  // decrementItemCount
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
  }, [productid,dispatch]);

  const addToCart = () => {
    console.log("add to cart");
    debugger;
    !!products?.id && dispatch(AddToCart(products));
  };



  // const handleIncrement = () => {
  //   dispatch(incrementItemCount(id));
  // };

  // const handleDecrement = () => {
  //    dispatch(decrementItemCount(id));
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
            {/* <button onClick={()=>handleIncrement(id)}>increase</button>
             <spna> </spna>
             <button onClick={()=>handleDecrement(id)}>decrease</button> */}
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
