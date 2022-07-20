import React, { useEffect } from "react";
import styled from "styled-components";
import { getAllProduct } from "../../../services/productService";
import ListProduct from "../../../components/ListProductCard";
import { productContext } from '../../../provider/productProvider';

const Wrapper = styled.div`
  @media only screen and (max-width: 767px) {
    position: relative;
    top: 300px;
  }
`;

const Catalog = () => {
    const productsValue = React.useContext(productContext);

    useEffect(() => {
        getAllProduct().then((response) => productsValue.setProducts(response.data.data));
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
