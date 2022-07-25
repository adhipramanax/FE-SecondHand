import React, { useState } from "react";
import styled from "styled-components";

// Layout
import MainLayout from "../../../layouts/Main.layout";

// Component
import CardOffer from "./CardOffer";

export const detailOfferContext = React.createContext();
export const modalContext = React.createContext();
export const messageContext = React.createContext();
export const alertContext = React.createContext();

const Wrapper = styled.div`
  @media only screen and (max-width: 767px) {
    position: relative;
    top: 80px;
  }
`;

const Index = () => {
  const [statusError, setStatusError] = useState("");
  const [message, setMessage] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [offerProduct, setOfferProduct] = useState([]);

  return (
    <MainLayout>
      <Wrapper>
        <detailOfferContext.Provider
          value={{
            offerProduct,
            setOfferProduct,
          }}
        >
          <messageContext.Provider
            value={{
              statusError,
              setStatusError,
              message,
              setMessage,
            }}
          >
            <modalContext.Provider
              value={{
                showModal,
                setShowModal,
              }}
            >
              <alertContext.Provider
                value={{
                  showAlert,
                  setShowAlert,
                }}
              >
                <CardOffer />
              </alertContext.Provider>
            </modalContext.Provider>
          </messageContext.Provider>
        </detailOfferContext.Provider>
      </Wrapper>
    </MainLayout>
  );
};

export default Index;
