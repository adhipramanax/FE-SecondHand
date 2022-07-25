import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import styled from "styled-components";

// Service
import { getAllProduct } from "../../../services/productService";
import { productContext } from '../../../provider/productProvider';

// component
import ListProduct from "../../../components/ListProductCard";

const Wrapper = styled.div`
  @media only screen and (max-width: 767px) {
    position: relative;
    top: 300px;
  }
`;

const Catalog = () => {
    const productsValue = React.useContext(productContext);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(token){
            getAllProduct(jwtDecode(token).id).then((response) => productsValue.setProducts(response.data.data));
        }else{
            getAllProduct().then((response) => productsValue.setProducts(response.data.data));
        }
    }, []);

    return (
        <Wrapper>
            <section className="catalog pb-1">
                <div class="container mt-4 mb-5">
                    <ListProduct 
                        data={productsValue.products} 
                        link={true} 
                        urlLink="/product/"
                        optionCol="col-md-2" 
                    />
                </div>
            </section>
        </Wrapper>
    );
};

export default Catalog;
