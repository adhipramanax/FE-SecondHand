import React, { useEffect, useState } from "react";
import { getProductSeller } from "../../../services/productService";
import ListProduct from "../../../components/ListProductCard";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductSeller().then((response) => setProducts(response.data.data));
    }, []);

    return (
        <>
            <ListProduct data={products} action={true} ribbon={true} link={true} urlLink="/seller/product/" />
        </>
    );
};

export default Catalog;
