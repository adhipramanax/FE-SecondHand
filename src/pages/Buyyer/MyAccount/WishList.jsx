import React, { useEffect, useState } from "react";
import { getWishListProduct } from "../../../services/wishListService";
import WishListCard from "../../../components/ListWishListCard";

const WishList = () => {
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        getWishListProduct().then((response) => setWishList(response.data.data));
    }, []);

    console.log(wishList);

    return (
        <>
            <section className="wish-list">
                <div class="container mt-4 mb-5">
                    <WishListCard data={wishList} action={false} link="/product/" />
                </div>
            </section>
        </>
    );
};

export default WishList;
