import React from 'react';
import backBtn from '../../../assets/images/fi_arrow-left.png';

const InputForm = () => {
    return (
        <>
            <section class="input-form">
                <div class="container">
                    <div class="row d-flex flex-wrap align-content-center justify-content-center">
                        <div class="col-1 col-lg-1 mt-4">
                            <a href="/seller/store#catalog"><img src={backBtn} alt="back-button" /></a>
                        </div>
                        
                        <div class="col-11 mt-4">
                            <h5 class="text-center fw-bold">Lengkapi Detail Product</h5>
                        </div>
                        <div class="col-12 col-lg-11 mt-4">
                            <p class="mb-1">Nama Produk</p>
                            <input class="input-style mb-3" type="text" placeholder='Nama Produk' />
                            <p class="mb-1">Harga Produk</p>
                            <input class="input-style mb-3" type="number" name="price-product" id="price-product" placeholder='Rp. 0,00' />
                            <p class="mb-1">Kategori</p>
                            <select class="input-style mb-3" name="category-product" id="category-product">
                                <option value="1">Semua</option>
                                <option value="2">Kendaraan</option>
                                <option value="3">Baju</option>
                                <option value="4">Elektronik</option>
                                <option value="5">Kesehatan</option>
                            </select>
                            <p class="mb-1">Deskripsi</p>
                            <input class="input-style mb-3" type="text" placeholder='Contoh: Jalan Ikan Hiu 33' />
                            <p class="mb-1">Foto Produk</p>
                            <input type="file" name="img-product" id="img-product"/>
                            <div class="row mt-4 mb-4">
                                <div class="col-6">
                                    <button class="btn btn-color-white px-2 w-100 post-button">Preview</button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-color-purple px-2 w-100 post-button">Terbitkan</button>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InputForm;
