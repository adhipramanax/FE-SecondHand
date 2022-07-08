import React from "react";
import WishListCard from "../WishListCard";

const Index = ({ data, link, action = false }) => {
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
                        <WishListCard
                            urlImage={item.galleries[0].urlImage}
                            title={item.product[0].name}
                            category={item.categories.map((category) => category.name + ", ")}
                            price={item.product[0].price}
                            urlLink={role === "buyer" ? `${link}${item.id}` : `${link}${item.id}`}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Index;
