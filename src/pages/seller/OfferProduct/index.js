import React, { useState } from "react";
import styled from "styled-components";
import MainLayout from "../../../layouts/Main.layout";
import CardOffer from "./CardOffer";

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

  return (
    <>
      <MainLayout>
        <Wrapper>
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
        </Wrapper>
      </MainLayout>
    </>
  );
};

export default Index;
