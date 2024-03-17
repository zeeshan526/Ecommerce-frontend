import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import ProductsListings from "./components/Products/ProductsListings";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/cart/cart";
import Thanku from "./components/cart/Thanku";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCartFromStorage } from "./redux/actions/productActions";
function App() {
  const dispatch = useDispatch();

  // let [num, setNum] = useState(0);

  // const addFive = () => {
  //   setNum((pre) => pre + 5);
  // };

  // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  return (
    <div className="App">
      <Banner />
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductsListings />} />
        <Route path="/product/:productid" exact element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thankYou" element={<Thanku />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
