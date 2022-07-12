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
// import StoreSellerViewbyBuyer from "./pages/Buyyer/StoreSellerView";
// import DetailProductbyBuyer from "./pages/Buyyer/detail product by buyer"

import { AuthProvider } from "./provider/authProvider";
import { ProductProvider } from "./provider/productProvider";

function App() {
    return (
        <AuthProvider>
            <ProductProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<DetailProduct />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/my-account" element={<MyAccount />} />

                    <Route path="/seller/store" element={<Dashboard />} />
                    <Route path="/seller/create-product" element={<CreateProduct />} />
                    <Route path="/seller/product/:id" element={<DetailProductSeller />} />
                    <Route path="/seller/offer-product" element={<OfferProduct />} />
                    <Route path="/seller/offer/:id" element={<DetailOffer />} />
                </Routes>
            </ProductProvider>
        </AuthProvider>
    );
}

export default App;
