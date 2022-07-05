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

const Index = ({ data, children }) => {
    const role = localStorage.getItem("role");

    console.log(data);

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

                            {role === "buyer" ? (
                                <button type="button" class="btn btn-color-purple w-100 mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Saya tertarik dan ingin nego
                                </button>
                            ) : (
                                <>
                                    <a href="#" class="btn btn-color-purple w-100 mt-3">
                                        Terbitkan
                                    </a>
                                    <a href="#" class="btn btn-color-white w-100 mt-3">
                                        Edit
                                    </a>
                                </>
                            )}

                            {/* <!-- Button trigger modal --> */}
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

            {children}
        </>
    );
};

export default Index;
