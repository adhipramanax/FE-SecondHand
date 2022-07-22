import React from 'react';
import styled from 'styled-components'

import Badge from '../Badge';

import casioWOne from "../../assets/images/Rectangle_24.png";

const Wrapper = styled.div`
    padding: 0;

    a{
        color: #000000;
        text-decoration: none;
    }

    .rectange-card {
        border: 1px solid #e6e6e6;
        border-radius: 16px;
    }
`

const Index = ({data}) => {
    const status = data.offer.offer_status;

    return (
        <>
            <Wrapper>
                <div class="rectange-card p-2 mb-3">
                    <div class="col-12 col-md-12 d-flex gap-3">
                        <img src={data.galleries[0].url_photo} alt="product-image" width={100} />
                        <div class="w-100">
                            <div class="catalog-header d-flex">
                                <h5 className="catalog-title">{data.product.name}</h5> 
                                <Badge type={status === true ? 'success' : status === false ? 'failed' : 'progress'} /> 
                            </div>

                            <p class="card-text text-muted">{data.categories.map(category => category.name).join(', ')}</p>
                            <h5>Rp. {data.product.price}</h5>
                        </div>
                    </div>
                </div> 
            </Wrapper>
        </>
    );
}

export default Index;
