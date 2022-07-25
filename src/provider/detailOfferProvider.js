import React, { useEffect, useState } from 'react';
import { getDetailProductOffer } from '../services/productService'

const detailOfferContext = React.createContext()

const DetailOfferProvider = (props) => {
    const [offerProduct, setOfferProduct] = useState();

    useEffect(() => {
        getDetailProductOffer(Number(props.id), Number(props.user)).then(response => setOfferProduct(response.data.data))
    }, []);

    return (
        <detailOfferContext.Provider
        value={{
            offerProduct,
            setOfferProduct            
        }}
        >
            {props.children}
        </detailOfferContext.Provider>
    )
}

export { detailOfferContext, DetailOfferProvider }
