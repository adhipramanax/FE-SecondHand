import { Route, Routes } from "react-router-dom";
import Home from "./pages/Buyyer/Home";
import Login from "./pages/Authorization/Login";
import Register from "./pages/Authorization/Register";
import Dashboard from "./pages/seller/dashboard"
import CreateProduct from "./pages/seller/CreateProduct";
import DetailProduct from "./pages/seller/DetailProduct";
import OfferProduct from "./pages/seller/OfferProduct";
import MyAccount from "./pages/Buyyer/MyAccount";
// import StoreSellerViewbyBuyer from "./pages/Buyyer/StoreSellerView";
// import DetailProductbyBuyer from "./pages/Buyyer/detail product by buyer"

import { AuthProvider } from "./provider/authProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/my-account" element={<MyAccount/>} />

        <Route path="/seller/store" element={<Dashboard />} />
        <Route path="/seller/create-product" element={<CreateProduct />} />
        <Route path="/seller/detail-product" element={<DetailProduct />} />
        <Route path="/seller/offer-product" element={<OfferProduct />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
