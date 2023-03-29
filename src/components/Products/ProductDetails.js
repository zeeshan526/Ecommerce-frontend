import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  removeSelectedProducts,
  selectedProducts,
  AddToCart
} from "../../redux/actions/productActions";

export default function ProductDetails() {
  const products = useSelector((state) => state.product);
  const { title, price, image } = products;

const data={
  id: 1, name: 'Product 1', price: 10, quantity: 1
}
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

        // console.log(productsData);

        return () => {
          debugger;
          dispatch(removeSelectedProducts());
        };
      });
  });



const addToCart=()=>{
  console.log('add to cart');
  debugger
 dispatch(AddToCart(data))

}


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

            {/* <p className='detail-price'>Price: {price}</p> */}
            <button className="Add-To-Cart-btn" onClick={()=>addToCart()}>Add To Cart</button>


          </div>
        </div>
      )}
    </div>
  );
}
