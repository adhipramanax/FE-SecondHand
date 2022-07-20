import React, { useEffect, useState } from "react";

import { getOfferProduct } from "../../../services/productService";

import ListProduct from "../../../components/ListProductCard";
import EmptyState from "../../../components/EmptyState";

const WishList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getOfferProduct().then((response) => setProducts(response.data.data));
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return <>{products.length === 0 ? <EmptyState description={"Belum ada produk yang diminati nih, sabar ya!"} /> : <ListProduct data={products} link={true} urlLink="/seller/offer/" optionCol="col-md-4" />}</>;
};

export default WishList;
