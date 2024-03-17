import React, { useEffect } from "react";
import "../Products/Product.css";
import { useSelector,useDispatch } from "react-redux";
import ProductComponents from "./ProductComponents";
import { setproducts } from "../../redux/actions/productActions";
import axios from "axios";
import HomePageCrousel from "./../Header/HomePageCrousel";

function ProductsListings() {
   const products= useSelector((state)=> state);

  const dispatch = useDispatch();

  // console.log(products);
  // const [Data, setData]=useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/?limit=15")
      .then((response) => {
        // let res=response.data
        //   console.log(response.data);

        dispatch(setproducts(response.data));
        // console.log(productsData);
      });
  },[dispatch]);

  // console.log('products:', products);

  // useEffect(() => {

  //   axios.get('https://fakestoreapi.com/products/?limit=18').then((res)=>{
  //     // console.log(res.data);
  //     let productsData=res.data;
  //     setData(productsData)
  //     // console.log(productsData);
  //   })

  // }, [])

  return (
    <div>
      <div>
        <HomePageCrousel />
        {Object.keys(products).length === 0 ? (
        <div>Loading...</div>
      ) : (

        <ProductComponents />
      )}
      </div>
    </div>
  );
}

export default ProductsListings;
