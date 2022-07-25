import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  button{
    text-align: left;
    border: none;
    width: 100%;
    padding: 0;
    background: none;
  }

  button:{
    box-shadow: none;
  }

  a {
    text-decoration: none;
  }
`;

const ProfileText = styled.h5`
  font-size: 1.1rem;
  margin: 0;
  margin-left: 10px;
  line-height: 1.5;
`;

const PriceText = styled.h5`
  font-size: 1.1rem;
  margin: 0;
  margin-left: 10px;
  line-height: 1.5;
`;

const ProfileTextMuted = styled.p`
  font-size: 0.7rem;
  color: #8c8c8c;
  margin: 0;
  margin-left: 10px;
`;

const Index = ({ data, optionCol, link  = '' }) => {
  const navigate = useNavigate();

  return (
    <>
      <div class={`col-12 ${optionCol}`}>
        <Wrapper>
          {link !== '' ?(
            <button type="button" class="text-dark" onClick={() => navigate(`/seller/offer/product/${link.link}/user/${link.user}`)}>
              <div class="card mt-4 card-detail">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-2 col-lg-2 col-md-1">
                      <img src={data?.url_photo} alt="profile" width={50} height={50} />
                    </div>
                    <div class="col-10 col-lg-9 col-md-10 d-flex flex-column justify-content-center">
                      <ProfileText class="mb-0">{data?.name}</ProfileText>
                      <PriceText>Rp. {data?.latestOfferPrice?.offer_price}</PriceText>
                      <ProfileTextMuted class="card-text text-muted mb-0">{data?.city}</ProfileTextMuted>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ) : (
            <div class="card mt-4 card-detail">
              <div class="card-body">
                <div class="row">
                  <div class="col-2 col-lg-2 col-md-1">
                    <img src={data?.url_photo} alt="profile" width={50} height={50} />
                  </div>
                  <div class="col-10 col-lg-9 col-md-10 d-flex flex-column justify-content-center">
                    <ProfileText class="mb-0">{data?.name}</ProfileText>
                    <ProfileTextMuted class="card-text text-muted mb-0">{data?.city}</ProfileTextMuted>
                  </div>
                </div>
              </div>
            </div>
          ) }
        </Wrapper>
      </div>
    </>
  );
};

export default Index;
