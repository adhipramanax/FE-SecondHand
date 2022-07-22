import React from "react";
import ProductCard from "../ProductCard";

const Index = ({ data, urlLink, link = false, action = false, ribbon = false, restore = false, onClick, optionCol }) => {
    const role = localStorage.getItem("role");

    return (
        <>
            <div class="row mt-4 g-4">
                {action === true ? (
                    <div class="col-6 col-md-4">
                        <a href="/seller/create-product" class="btn-add-product text-decoration-none mb-4">
                            <div class="btn-add-product-icon">+</div>
                            <div class="btn-add-product-text">Tambah Produk</div>
                        </a>
                    </div>
                ) : (
                    <></>
                )}

                {data.map((item, index) => {
                    return (
                        <ProductCard
                            id={item.id}
                            urlImage={item.galleries[0].url_photo}
                            title={item.name}
                            category={item.categories.map((category) => category.name).join(', ')}
                            price={item.price}
                            urlLink={role === "buyer" ? `${urlLink}${item.id}` : `${urlLink}${item.id}`}
                            link={link}
                            status={item.status_product}
                            ribbon={ribbon}
                            restore={restore}
                            onClick={onClick}
                            optionCol={optionCol}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Index;
