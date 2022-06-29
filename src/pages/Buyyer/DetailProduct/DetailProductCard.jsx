import React, { useState } from "react";
import profileImg from "../../../assets/images/Rectangle_33.png";
import casio from "../../../assets/images/Rectangle_134.png";
import SellerCard from "../../../components/seller card/SellerCard";
import Input from "../../../components/Input/index";

const DetailProductCard = ({ data }) => {
    const [price, setPrice] = useState("");

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    console.log(data);

    return <></>;
};

export default DetailProductCard;
