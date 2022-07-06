import React from "react";
import styled from "styled-components";

import profile from "../../assets/images/Rectangle_33.png";

const Wrapper = styled.div`
    a {
        text-decoration: none;
    }
`;

const ProfileText = styled.h5`
    font-size: 1.1rem;
    margin: 0;
    margin-left: 10px;
`;

const ProfileTextMuted = styled.p`
    font-size: 0.7rem;
    color: #8c8c8c;
    margin: 0;
    margin-left: 10px;
`;

const Index = ({ data, optionCol }) => {
    return (
        <>
            <div class={`col-12 ${optionCol}`}>
                <div class="card mt-4 card-detail">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-2 col-lg-2 col-md-1">
                                <img src={profile} alt="profile" />
                            </div>
                            <div class="col-10 col-lg-9 col-md-10 d-flex flex-column justify-content-center">
                                <Wrapper>
                                    <a href="/seller/offer-product" class="text-dark">
                                        <ProfileText class="mb-0">{data?.name}</ProfileText>
                                    </a>
                                </Wrapper>
                                <ProfileTextMuted class="card-text text-muted mb-0">{data?.city}</ProfileTextMuted>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
