import { Route, Routes } from "react-router-dom";
import Home from "./pages/Buyyer/Home";
import Login from "./pages/Authorization/Login";
import Register from "./pages/Authorization/Register";
import Dashboard from "./pages/seller/dashboard";
import CreateProduct from "./pages/seller/CreateProduct";
import DetailProductSeller from "./pages/seller/DetailProduct";
import OfferProduct from "./pages/seller/OfferProduct";
import DetailProduct from "./pages/Buyyer/DetailProduct";
import MyAccount from "./pages/Buyyer/MyAccount";
import DetailOffer from "./pages/seller/DetailOffer";
import StoreSeller from "./pages/Buyyer/StoreSeller";
// import StoreSellerViewbyBuyer from "./pages/Buyyer/StoreSellerView";
// import DetailProductbyBuyer from "./pages/Buyyer/detail product by buyer"

import { AuthProvider } from "./provider/authProvider";
import { ProductProvider } from "./provider/productProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId = "343441939642-bughtvubpg682hsn420kqfavvse5vugu.apps.googleusercontent.com";

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/login" element={
          <GoogleOAuthProvider clientId={clientId}>
            <Login />
          </GoogleOAuthProvider>} 
        />
        <Route path="/register" element={<Register />} />
        <Route path="/my-account" element={<MyAccount />} />

        <Route path="/seller/store" element={<Dashboard />} />
        <Route path="/seller/create-product" element={<CreateProduct />} />
        <Route path="/seller/product/:id" element={<DetailProductSeller />} />
        <Route path="/seller/offer/:id" element={<DetailOffer />} />
        <Route path="/seller/offer/product/:id" element={<OfferProduct />} />

        <Route path="/buyer/store" element={<StoreSeller />} />
      </Routes>
  );
}

export default App;
