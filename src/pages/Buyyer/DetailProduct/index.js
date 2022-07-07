import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findProduct, offerProduct } from "../../../services/productService";

import profileImg from "../../../assets/images/Rectangle-33.png";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import MainLayout from "../../../layouts/Main.layout";

import ProductCardDetail from "../../../components/ProductCardDetail";
import ActionButton from "../../../components/ActionButton";

const Index = () => {
    const params = useParams();

    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState("");

    useEffect(() => {
        findProduct(params.id).then((response) => setProduct(response.data.data));
    }, []);

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleSubmit = (e) => {
        const data = {
            offer_price: price,
            id_product: product.id,
        };

        offerProduct(data).then((response) => {
            window.location.href = `/product/${product.id}`;
        });
    };

    return (
        <>
            <MainLayout>
                <section class="card-detail-product">
                    <div class="container">
                        <ProductCardDetail data={product}>
                            <Modal>
                                <h5>Masukkan Harga Tawarmu</h5>
                                <p class="text-muted">Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
                                <div class="card offer-modal mb-4">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-1 pe-0">
                                                <img src={profileImg} alt="profile" />
                                            </div>

                                            <div class="col-11 ps-5 pe-0">
                                                <h5 class="mb-0">{product.name}</h5>
                                                <p class="card-text text-muted mb-0">Rp. {product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Input label="Harga Tawar" type="price" name="price" id="price" placeholder="Rp. 0,00" onChange={(value) => handlePrice(value)} />
                                <div class="mt-4">
                                    <ActionButton color="#FFFFFF" bg="#4B1979" width="100%" text="Kirim" onClick={(e) => handleSubmit(e)} />
                                </div>
                            </Modal>
                        </ProductCardDetail>
                    </div>
                </section>
            </MainLayout>
        </>
    );
};

export default Index;
