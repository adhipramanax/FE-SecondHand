import React, { useEffect, useState } from "react";
import casioWOne from "../../../assets/images/Rectangle_24.png";
import ListProduct from "../../../components/ListProductCard"
import { getWishlistProduct } from "../../../services/productService";

const Catalog = () => {
    const [products, setProducts] = useState([]) 
    
    useEffect(() => {
        getWishlistProduct().then((response) => setProducts(response.data.data));
    }, []);

    return (
        <>
            <div class="container mt-4 mb-4">
                <div class="row g-4">
                    <ListProduct data={products} action={false} link="/seller/product/" />
                </div>
            </div>


            {/* <div class="col-6 col-md-4">
                <a href="/seller/detail-product" class="text-dark text-decoration-none">
                    <div class="card catalog-card">
                        <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                        <div class="card-body">
                            <div class="card-body pt-2">
                                <h5 className="catalog-title">Jam Tangan Casio</h5>
                                <p class="card-text text-muted">Aksesoris</p>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-6 col-md-4">
                <a href="/seller/detail-product" class="text-dark text-decoration-none">
                    <div class="card catalog-card">
                        <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                        <div class="card-body">
                            <div class="card-body pt-2">
                                <h5 className="catalog-title">Jam Tangan Casio</h5>
                                <p class="card-text text-muted">Aksesoris</p>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-6 col-md-4">
                <a href="/seller/detail-product" class="text-dark text-decoration-none">
                    <div class="card catalog-card">
                        <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                        <div class="card-body">
                            <div class="card-body pt-2">
                                <h5 className="catalog-title">Jam Tangan Casio</h5>
                                <p class="card-text text-muted">Aksesoris</p>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                    </div>
                </a>
            </div> */}
        </>
    );
};

export default Catalog;
