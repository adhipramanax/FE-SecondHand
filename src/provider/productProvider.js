import React, { useState } from 'react';

const productContext = React.createContext()

const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);

    return (
        <productContext.Provider
        value={{
            products,
            setProducts            
        }}
        >
            {props.children}
        </productContext.Provider>
    )
}

export { productContext, ProductProvider }
