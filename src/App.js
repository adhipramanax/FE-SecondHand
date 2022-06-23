import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import DetailProduct from "./pages/detail-product/DetailProduct";
import CreateProduct from "./pages/create-product/CreateProduct";
import OfferProduct from "./pages/offer-product/OfferProduct";
import ProductSale from "./pages/seller/product-sale/ProductSale";

function App() {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={""} />
        <Route path="/register" element={""} />
        <Route path="/my-account" element={""} />
        <Route path="/store" element={<ProductSale />} />
        <Route path="/seller/create-product" element={<CreateProduct />} />
        <Route path="/seller/detail-product" element={<DetailProduct />} />
        <Route path="/seller/offer-product" element={<OfferProduct />} />
    </Routes>

  );
}

export default App;
