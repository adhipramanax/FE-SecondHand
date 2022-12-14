import React, { useEffect, useState } from "react";

// Service
import { findProduct } from "../../../services/productService";

// Component
import WishListCard from "../../../components/ListWishListCard";
import EmptyState from "../../../components/EmptyState";

const WishList = () => {
    const user = JSON.parse(localStorage.getItem("payload"));
    const wishListValue = JSON.parse(localStorage.getItem("wishlist")) || [];
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        wishListValue.forEach(item => {
            if(item.id_user === Number(user.id)){
                findProduct(item.id_product).then((response) => {
                    setWishList([...wishList, response.data.data]);
                });
            }
        });
    }, []);

    return (
        <>
            <section className="wish-list">
                <div class="container mt-4 mb-5">
                    {wishList.length === 0 ? <EmptyState description={"Belum ada produk yang diminati nih, Ayo cari barangnya sekarang!"} /> : <WishListCard data={wishList} action={false} link="/product/" />}
                </div>
            </section>
        </>
    );
};

export default WishList;
