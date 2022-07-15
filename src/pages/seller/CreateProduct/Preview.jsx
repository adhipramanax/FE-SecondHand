import React from "react";
import styled from "styled-components";

const Text = styled.h5`
  font-size: 1.2rem;
`;

const TextMuted = styled.p`
  font-size: 0.75rem;
  color: #8c8c8c;
`;

const Wrapper = styled.div`
    .img-crop{
        object-fit: cover;
        height: 350px;
    }
`
const Preview = ({ data }) => {
  return (
    <Wrapper>
      <div
        class="modal fade"
        id="modalPreview"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
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
                  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                      {data.fileUrl?.map((item, index) => {
                        return (
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            class={index === 0 ? "active" : ""}
                          ></button>
                        );
                      })}
                    </div>
                    <div class="carousel-inner">
                      {data.fileUrl?.map((item, index) => {
                        return (
                          <div class={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={item} class="d-block w-100 img-crop" alt="item-img" />
                          </div>
                        );
                      })}
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div class="col-12 col-lg-4 mt-4">
                  <div class="card card-detail">
                    <div class="card-body">
                      <Text class="card-title">{data.formValues.name}</Text>
                      <TextMuted class="card-text text-muted">
                        {/* {data?.categories?.map((category) => category.name).join(", ")} */}
                        {data.formValues.categories}
                      </TextMuted>
                      <Text class="card-title">Rp. {data.formValues.price}</Text>

                      {/* <!-- Button trigger modal --> */}
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-8 mt-4 mb-5">
                  <div class="card card-detail">
                    <div class="card-body">
                      <p class="card-text fw-bold">Deskripsi</p>
                      <p class="card-text">{data.formValues.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Preview;
