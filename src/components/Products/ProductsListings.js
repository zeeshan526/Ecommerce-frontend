import React,{useEffect, useState} from 'react'
import '../Products/Product.css'
import { useDispatch,useSelector } from 'react-redux'
import ProductComponents from './ProductComponents'
import { setproducts } from '../../redux/actions/productActions';
import axios from 'axios'


function ProductsListings() {
// const products= useSelector((state)=> state);

const dispatch = useDispatch();


// console.log(products);
// const [Data, setData]=useState([]);



useEffect(() => {
  
  axios.get('https://fakestoreapi.com/products/?limit=12').then((response)=>{
    
//   console.log(response.data);
    
  dispatch(setproducts(response.data))
    // console.log(productsData);
  })
  
  
}, [])

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
    <div >
    <ProductComponents/>
    </div>

      </div>
  
  )
}

export default ProductsListings