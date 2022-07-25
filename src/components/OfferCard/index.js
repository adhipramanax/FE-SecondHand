import React from "react";
import Moment from "moment";
import styled from "styled-components";

import ActionButton from "../ActionButton";
import OutlineButton from "../OutlineButton";
import profileImg from "../../assets/images/Rectangle-33.png";
import whatsapp from "../../assets/images/Whatsapp.png";

const Wrapper = styled.div`
  .offer-product-name {
    font-size: 1.1rem;
  }

  .offer-product-price,
  .offer-price {
    font-size: 1.1rem;
    font-weight: normal;
  }

  .offer-price.stripped {
    text-decoration: line-through;
  }

  .offer-product-name,
  .offer-product-price,
  .offer-price {
    line-height: 1.5;
  }
`;

const Index = ({ data, onClick, index }) => {
  return (
    <>
      <div class="col-12">
        <Wrapper>
          <div class="card card-detail mt-2">
            <div class="card-body">
              <div class="row">
                <div class="col-2 col-md-2">
                  <img src={profileImg} alt="item-profile-img" class="w-100" />
                </div>

                <div class="col-10 col-md-10">
                  <div class="row">
                    <div class="d-flex justify-content-between">
                      <p class="text-muted">{data.offer_status === false ? "Penawaran ditolak" : data.offer_status === true ? "Penawaran diterima" : "Penawaran produk"}</p>
                      <p class="text-muted">{Moment(data.createdAt).format("MMMM D YYYY, h:mm a")}</p>
                    </div>
                  </div>
                  <h5 class="mb-0 offer-product-name">{data?.Product?.name}</h5>
                  <h5 class="mb-0 offer-product-price">Rp. {data?.Product?.price}</h5>
                  <h5 class={`mb-0 offer-price ${data.offer_status === false ? "stripped" : ""}`}>
                    Ditawar Rp. {data.offer_price}
                  </h5>

                  <div class="row mt-4">
                    <div class="d-flex justify-content-end">
                      {data.offer_status === null ? (
                        <>
                          <OutlineButton
                            color="#000000"
                            bg="#4B1979"
                            text="Tolak"
                            width="100%"
                            onClick={onClick}
                            data-index={index}
                          />
                          <span class="ms-3" />
                          <ActionButton
                            color="#ffffff"
                            bg="#4B1979"
                            text="Terima"
                            width="100%"
                            onClick={onClick}
                            data-index={index}
                          />
                        </>
                      ) : data.offer_status === false ? (
                        <></>
                      ) : (
                        <>
                          <OutlineButton
                            color="#000000"
                            bg="#4B1979"
                            text="Status"
                            width="100%"
                            data-index={index}
                            data-target="modalStatus"
                            onClick={onClick}
                          />
                          <span class="ms-3" />
                          <ActionButton
                            color="#ffffff"
                            bg="#4B1979"
                            text="Hubungi di"
                            icon={whatsapp}
                            width="100%"
                            data-index={index}
                            data-target="modalCall"
                            onClick={onClick}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Index;
