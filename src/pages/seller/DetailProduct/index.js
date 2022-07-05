import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findProduct } from "../../../services/productService";

import MainLayout from "../../../layouts/Main.layout";

import ProductCardDetail from "../../../components/ProductCardDetail";

const Index = () => {
    const params = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        findProduct(params.id).then((response) => setProduct(response.data.data));
    }, []);

    return (
        <>
            <MainLayout>
                <section class="card-detail-product">
                    <div class="container">
                        <ProductCardDetail data={product} />
                    </div>
                </section>
            </MainLayout>
        </>
    );
};

export default Index;
