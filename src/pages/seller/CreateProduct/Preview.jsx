import React from "react";
import styled from "styled-components";

import UserCard from "../../../components/UserCard";
import Carousel from "../../../components/Carousel";

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

const Preview = ({ data }) => {
    console.log(data);
    return (
        <>
            <div class="modal fade" id="modalPreview" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Preview Product
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 col-lg-8 mt-4">
                                    <Carousel />
                                </div>
                                <div class="col-12 col-lg-4 mt-4">
                                    <div class="card card-detail">
                                        <div class="card-body">
                                            <Text class="card-title">{data.productName}</Text>
                                            <TextMuted class="card-text text-muted">
                                                {/* {data?.categories?.map((category) => category.name).join(", ")} */}
                                                {data.category}
                                            </TextMuted>
                                            <Text class="card-title">Rp. {data.price}</Text>

                                            {/* <!-- Button trigger modal --> */}
                                        </div>
                                    </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preview;
