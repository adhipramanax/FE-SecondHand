import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../../services/productService";
import ListProduct from "../../../components/ListProductCard";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProduct().then((response) => setProducts(response.data.data));
    }, []);

    return (
        <>
            <section className="catalog">
                <div class="container mt-4 mb-5">
                    <ListProduct data={products} link="/product/" />
                </div>
            </section>
        </>
    );
};

export default Catalog;
