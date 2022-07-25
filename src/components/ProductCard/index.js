import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Component
import ActionButton from "../ActionButton";

const Wrapper = styled.div`
  position: relative;

  button {
    text-align: left;
    border: none;
    width: 100%;
  }

  button:focus {
    box-shadow: none;
  }

  .ribbon {
    width: 100px;
    height: 130px;
    overflow: hidden;
    position: absolute;
    z-index: 1;
  }
  
  .ribbon span {
    position: absolute;
    display: block;
    width: 215px;
    padding: 5px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: .7rem;
    text-transform: uppercase;
    text-align: center;
  }

  .ribbon span.purple {
    background-color: #4B1979;
  }

  .ribbon span.red {
    background-color: red;
  }

  .ribbon {
    top: 0px;
    right: 0px;
  }

  .ribbon span {
    left: -50px;
    top: 25px;
    transform: rotate(45deg);
  }

  .card{
    min-height: 280px;
  }

  .card-img-top{
    max-height: 150px;
    object-fit: cover;
  }
`;

const H5 = styled.h5`
  font-size: 1.2rem;
`;

const P = styled.p`
  font-size: 0.75rem;
  color: #8c8c8c;
`;

const Index = ({ optionCol, id, urlImage, title, category, price, urlLink, link, status, ribbon, restore, onClick }) => {
  const navigate = useNavigate();
  
  return (
    <>
      <div class={`col-6 ${optionCol}`}>
        <Wrapper>
            {ribbon ?(
                <div class="ribbon">
                    <span class={status? 'purple' : 'red'}>{status? 'Diterbitkan' : 'Disembunyikan'}</span>
                </div>
            ):(
                <></>
            )}
          {!link ? (
                <div class="card catalog-card h-100">
                  <img src={urlImage} class="card-img-top" alt="jam-tangan" />
                  <div class="card-body">
                    <H5 className="catalog-title">{title}</H5>
                    <P class="card-text text-muted">{category}</P>
                    <H5>Rp. {price}</H5>
                    {restore ?(
                      <ActionButton 
                          color="#ffffff"
                          bg="#4B1979"
                          width="100%"
                          text="Pulihkan"
                          data-id={id}
                          onClick={onClick} 
                          style={{textAlign: "center"}}
                      />
                    ):(
                      <></>
                    )}
                  </div>
                </div>
          ):(    
            <button type="button" class="text-dark text-decoration-none" onClick={() => navigate(urlLink)}>
              <div class="card catalog-card h-100">
                <img src={urlImage} class="card-img-top" alt="jam-tangan" />
                <div class="card-body">
                  <H5 className="catalog-title">{title}</H5>
                  <P class="card-text text-muted">{category}</P>
                  <H5>Rp. {price}</H5>
                </div>
              </div>
            </button>
          )}
        </Wrapper>
      </div>
    </>
  );
};

export default Index;
