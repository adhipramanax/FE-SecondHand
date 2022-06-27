import { Route, Routes } from "react-router-dom";
import Home from "./pages/Buyyer/Home";
import Login from "./pages/Authorization/Login";
import Register from "./pages/Authorization/Register";
import Dashboard from "./pages/seller/dashboard"
import CreateProduct from "./pages/seller/CreateProduct";
import DetailProduct from "./pages/seller/DetailProduct";
import OfferProduct from "./pages/seller/OfferProduct";
import DetailProductCard from "./pages/Buyyer/DetailProduct";
// import StoreSellerViewbyBuyer from "./pages/Buyyer/StoreSellerView";
// import DetailProductbyBuyer from "./pages/Buyyer/detail product by buyer";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/seller/store" element={<Dashboard />} />
        <Route path="/seller/create-product" element={<CreateProduct />} />
        <Route path="/seller/detail-product" element={<DetailProduct />} />
        <Route path="/seller/offer-product" element={<OfferProduct />} />

        <Route path="/seller/detail-product-by-buyer" element={<DetailProductCard />} />
    </Routes>
  );
}

export default App;
