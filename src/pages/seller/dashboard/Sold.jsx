import React, {useEffect, useState} from 'react';

import { getProductSold } from '../../../services/productService';

import ListProduct from "../../../components/ListProductCard";
import EmptyState from '../../../components/EmptyState';

const Sold = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductSold().then((response) => setProducts(response.data.data));
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <>
            {
                products.length === 0 ?(
                    <EmptyState 
                    description={"Belum ada produk yang terjual nih, sabar ya!"}
                    />
                ) : (
                    <ListProduct data={products} />
                )

            } 
        </>
    );
}

export default Sold;
