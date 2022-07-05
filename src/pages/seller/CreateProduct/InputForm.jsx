import React, { useEffect, useState } from "react";
import backBtn from "../../../assets/images/fi_arrow-left.png";
import Input from "../../../components/Input";
import ActionButton from "../../../components/ActionButton";

const InputForm = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [productPhoto, setProductPhoto] = useState("");

    const handleProductName = (e) => {
        setProductName(e.target.value);
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleProductPhoto = (e) => {
        setProductPhoto(e.target.value);
    };

    const handlePreview = (e) => {};

    const handleSubmit = (e) => {
        const data = {
            productName,
            price,
            category,
            description,
            productPhoto,
        };
    };
    return (
        <>
            <section class="input-form">
                <div class="container">
                    <div class="row d-flex flex-wrap align-content-center justify-content-center">
                        <div class="col-1 col-lg-1 mt-4">
                            <a href="/seller/store#catalog">
                                <img src={backBtn} alt="back-button" />
                            </a>
                        </div>

                        <div class="col-11 mt-4">
                            <h5 class="text-center fw-bold">Lengkapi Detail Product</h5>
                        </div>
                        <div class="col-12 col-lg-11 mt-4">
                            <Input
                                label="Nama Produk"
                                type="text"
                                name="product-name"
                                id="product-name"
                                width="100%"
                                placeholder="Nama Produk"
                                value={productName}
                                onChange={(value) => handleProductName(value)}
                            />

                            <Input label="Harga" type="number" name="product-price" id="product-price" width="100%" placeholder="Rp. 0,00" value={price} onChange={(value) => handlePrice(value)} />

                            <p class="mb-1">Kategori</p>
                            <select class="input-style mb-3" name="category-product" id="category-product">
                                <option value="1">Semua</option>
                                <option value="2">Kendaraan</option>
                                <option value="3">Baju</option>
                                <option value="4">Elektronik</option>
                                <option value="5">Kesehatan</option>
                            </select>

                            <Input
                                label="Deskripsi"
                                type="text"
                                name="description"
                                id="description"
                                width="100%"
                                placeholder="Contoh: Jalan Ikan Hiu 33"
                                value={description}
                                onChange={(value) => handleDescription(value)}
                            />

                            <Input label="Foto Produk" type="file" name="product-photo" id="product-photo" width="100%" value={productPhoto} onChange={(value) => handleProductPhoto(value)} />

                            <div class="row mt-4 mb-4">
                                <div class="col-6">
                                    <ActionButton color="#000000" bg="#FFFFFF" text="Preview" width="100%" onClick={(e) => handlePreview(e)} />
                                </div>

                                <div class="col-6">
                                    <ActionButton color="#FFFFFF" bg="#4B1979" text="Terbitkan" width="100%" onClick={(e) => handleSubmit(e)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InputForm;
