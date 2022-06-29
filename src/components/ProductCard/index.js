import React from "react";
import styled from 'styled-components';

const H5 = styled.h5`
    font-size: 1.2rem;
`

const P = styled.p`
    font-size: .75rem;
    color: #8c8c8c;
`


const Index = ({ optionCol, urlImage, title, category, price, urlLink }) => {
    return (
        <>
            <div class={`col-6 col-md-4 ${optionCol}`}>
                <a href={urlLink} class="text-dark text-decoration-none">
                    <div class="card catalog-card h-100">
                        <img src={urlImage} class="card-img-top" alt="jam-tangan" />
                        <div class="card-body">
                            <H5 className="catalog-title">{title}</H5>
                            <P class="card-text text-muted">{category}</P>
                            <H5>Rp. {price}</H5>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
};

export default Index;
