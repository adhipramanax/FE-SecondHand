import React, { useEffect, useState } from "react";
import { getWishListProduct } from "../../../services/wishListService";
import WishListCard from "../../../components/ListWishListCard";
import EmptyState from "../../../components/EmptyState";

const WishList = () => {
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        getWishListProduct().then((response) => setWishList(response.data.data));
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
