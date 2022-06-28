import React from "react";
import ProductCard from "../ProductCard";

const Index = ({ data }) => {
    return (
        <>
            {console.log(data)}
            <div class="row">
                {data.map((item, index) => {
                    return <ProductCard urlImage={""} title={item.name} category={""} price={item.price} urlLink={""} />;
                })}
            </div>
        </>
    );
};

export default Index;
