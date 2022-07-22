import React from "react";
import styled from "styled-components";

// Component
import Carousel from "../Carousel";
import UserCard from "../UserCard";

const Text = styled.h5`
    font-size: 1.2rem;
`;

const TextMuted = styled.p`
    font-size: 0.75rem;
    color: #8c8c8c;
`;

const Index = ({ data, children }) => {
    const role = localStorage.getItem("role");

    return (
        <>
            <div class="row">
                <div class="col-12 col-lg-8 mt-4">
                    <Carousel data={data.galleries} />
                </div>
                <div class="col-12 col-lg-4 mt-4">
                    <div class="card card-detail">
                        <div class="card-body">
                            <Text class="card-title">{data.name}</Text>
                            <TextMuted class="card-text text-muted">{data?.categories?.map((category) => category.name).join(", ")}</TextMuted>
                            <Text class="card-title">Rp. {data.price}</Text>
                            {children}
                            
                        </div>
                    </div>
                    <UserCard data={data.seller} />
                </div>
                <div class="col-12 col-lg-8 mt-4 mb-5">
                    <div class="card card-detail">
                        <div class="card-body">
                            <p class="card-text fw-bold">Deskripsi</p>
                            <p class="card-text">{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
