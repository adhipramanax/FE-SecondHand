import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    .img-crop{
        object-fit: cover;
        height: 350px;
    }
`

const Index = ({ data }) => {
    console.log(data);
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    {data?.map((item, index) => {
                        return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} class={index === 0 ? "active" : ""}></button>;
                    })}
                </div>
                <div class="carousel-inner">
                    {data?.map((item, index) => {
                        return (
                            <div class={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <Wrapper>
                                    <img src={item.url_photo} class="d-block w-100 img-crop" alt="item-img" />
                                </Wrapper>
                            </div>
                        );
                    })}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Index;
