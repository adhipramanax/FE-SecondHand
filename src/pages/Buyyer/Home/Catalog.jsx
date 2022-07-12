import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../../services/productService";
import ListProduct from "../../../components/ListProductCard";
import { productContext } from '../../../provider/productProvider';
<<<<<<< HEAD

const Catalog = () => {
    const productsValue = React.useContext(productContext);
=======


const Catalog = () => {
    const productsValue = React.useContext(productContext);
    // const [products, setProducts] = useState([]);
>>>>>>> 73760ef4771a7b327180c671bfa52c3ae062d3bc

    useEffect(() => {
        getAllProduct().then((response) => productsValue.setProducts(response.data.data));
    }, []);

    // const handleSearch = (e) => {
    //     searchProduct(e.target.value).then((response) => setProducts(response.data.data));
    // }

    return (
        <>
            <section className="catalog">
                <div class="container mt-4 mb-5">
<<<<<<< HEAD
                    <ListProduct data={productsValue.products} />
=======
                    <ListProduct data={productsValue.products} link="/product/" />
>>>>>>> 73760ef4771a7b327180c671bfa52c3ae062d3bc
                </div>
            </section>
        </>
    );
};

export default Catalog;
