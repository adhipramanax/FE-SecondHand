import React from "react";
import styled from "styled-components";

// Import provider
import { HistoryTransactionProvider } from "../../../provider/historyTransactionProvider";
import { ProfileProvider } from "../../../provider/profileProvider";

// Layout
import MainLayout from "../../../layouts/Main.layout";
import ProductContainer from "./productContainer";

const Wrapper = styled.div`
  @media only screen and (max-width: 767px) {
      position: relative;
      top: 80px;
  }
`

const Index = () => {

  return (
    <HistoryTransactionProvider>
      <ProfileProvider>
        <MainLayout>
          <Wrapper>
            <section class="card-detail-product">
              <div class="container">
                <ProductContainer />
              </div>
            </section>
          </Wrapper>
        </MainLayout>
      </ProfileProvider>
    </HistoryTransactionProvider>
  );
};

export default Index;
