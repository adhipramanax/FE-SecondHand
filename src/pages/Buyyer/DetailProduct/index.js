import React from "react";

// Import provider
import { HistoryTransactionProvider } from "../../../provider/historyTransactionProvider";

// Layout
import MainLayout from "../../../layouts/Main.layout";
import ProductContainer from "./productContainer";



const Index = () => {

  return (
    <HistoryTransactionProvider>
      <MainLayout>
        <section class="card-detail-product">
          <div class="container">
            <ProductContainer />
          </div>
        </section>
      </MainLayout>
    </HistoryTransactionProvider>
  );
};

export default Index;
