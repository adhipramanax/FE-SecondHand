import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

import { getProductSellerInTrash, RestoreProduct } from '../../../services/productService';

import ListProduct from "../../../components/ListProductCard";
import EmptyState from '../../../components/EmptyState';

import { messageContext, alertContext } from "./"

const Sold = () => {
    const messageValue = React.useContext(messageContext);
    const alertValue = React.useContext(alertContext);
    const [products, setProducts] = useState([]);

    const handleRestore = async (e) => {
        const id = e.target.getAttribute('data-id');
        const data = {
            data: null
        }

        let apiRes = await RestoreProduct(id, data)

        try {
            
        } finally {
            alertValue.setShowAlert(true);

            if (apiRes.data.meta.status === "success") {
                messageValue.setStatus("success");
                messageValue.setMessage("Product berhasil dipulihkan");
                window.location.reload();
            } else {
                messageValue.setStatus("error");
                messageValue.setMessage("terjadi kesalahan ulangi lagi nanti");
            }
        }
    }

    useEffect(() => {
        getProductSellerInTrash().then((response) => setProducts(response.data.data));
    }, []);

    return (
        <>
            {
                products.length === 0 ?(
                    <EmptyState 
                    description={"Belum ada produk disampah"}
                    />
                ) : (
                    <ListProduct data={products} restore={true} optionCol="col-md-4" onClick={(e) => handleRestore(e)} />
                )

            } 
        </>
    );
}

export default Sold;
