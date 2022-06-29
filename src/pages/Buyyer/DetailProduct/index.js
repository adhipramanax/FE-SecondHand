import React, { useEffect, useState } from "react";
import MainLayout from "../../../layouts/Main.layout";
import DetailProductCard from "./DetailProductCard";
import { useParams } from "react-router-dom";
import { findProduct } from "../../../services/productService";

const Index = () => {
    const params = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        findProduct(params.id).then((response) => setProduct(response.data.data));
    }, []);

    return (
        <>
            <MainLayout>
                <DetailProductCard data={product} />
            </MainLayout>
        </>
    );
};

export default Index;
