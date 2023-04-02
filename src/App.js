import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import ProductsListings from "./components/Products/ProductsListings";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/cart/cart";

function App() {
  // let [num, setNum] = useState(0);

  // const addFive = () => {
  //   setNum((pre) => pre + 5);
  // };

  // Similar to componentDidMount and componentDidUpdate:

  return (
    <div className="App">
      <Banner />
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductsListings />} />
        <Route path="/product/:productid" exact element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
