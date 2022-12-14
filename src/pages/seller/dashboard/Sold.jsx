import React, {useEffect, useState} from 'react';

// Service
import { getProductSold } from '../../../services/productService';

// Component
import ListProduct from "../../../components/ListProductCard";
import EmptyState from '../../../components/EmptyState';

const Sold = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductSold().then((response) => setProducts(response.data.data));
    }, []);

    return (
        <>
            {
                products.length === 0 ?(
                    <EmptyState 
                    description={"Belum ada produk yang terjual nih, sabar ya!"}
                    />
                ) : (
                    <ListProduct data={products} optionCol="col-md-4"/>
                )

            } 
        </>
    );
}

export default Sold;
