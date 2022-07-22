import { Route, Routes } from "react-router-dom";
import Home from "./pages/Buyyer/Home";
import Login from "./pages/Authorization/Login";
import Register from "./pages/Authorization/Register";
import Dashboard from "./pages/seller/dashboard";
import CreateProduct from "./pages/seller/CreateProduct";
import UpdateProduct from "./pages/seller/UpdateProduct";
import DetailProductSeller from "./pages/seller/DetailProduct";
import OfferProduct from "./pages/seller/OfferProduct";
import DetailProduct from "./pages/Buyyer/DetailProduct";
import MyAccount from "./pages/Buyyer/MyAccount";
import DetailOffer from "./pages/seller/DetailOffer";

import PrivateRoute from "./routes/privateRoute";

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
        <Route path="/my-account" element={
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        } />

        <Route path="/seller/store" element={
          <PrivateRoute>    
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/seller/create-product" element={
          <PrivateRoute>  
            <CreateProduct />
          </PrivateRoute>
        } />
        <Route path="/seller/product/update/:id" element={
          <PrivateRoute>  
            <UpdateProduct />
          </PrivateRoute>
        } />
        <Route path="/seller/product/:id" element={
          <PrivateRoute>  
            <DetailProductSeller />
          </PrivateRoute>
        } />
        <Route path="/seller/offer/:id" element={
          <PrivateRoute>
            <DetailOffer />
          </PrivateRoute>
        } />
        <Route path="/seller/offer/product/:id/user/:user" element={
          <PrivateRoute>  
            <OfferProduct />
          </PrivateRoute>
        } />
      </Routes>
  );
}

export default App;
