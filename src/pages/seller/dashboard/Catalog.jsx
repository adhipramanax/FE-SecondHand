import React, { useEffect, useState } from "react";
import casioWOne from "../../../assets/images/Rectangle_24.png";
import { getProductSeller } from "../../../services/productService";
import ProductCard from "../../../components/ProductCard";
import ListProduct from "../../../components/ListProductCard";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductSeller().then((response) => setProducts(response.data.data));
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <>
            {/* <div class="col-6 col-md-4">
                <a href="/seller/create-product" class="btn-add-product text-decoration-none mb-4">
                    <div class="btn-add-product-icon">+</div>
                    <div class="btn-add-product-text">Tambah Produk</div>
                </a>
            </div> */}
            <ListProduct data={products} />
        </>
    );
};

export default Catalog;
