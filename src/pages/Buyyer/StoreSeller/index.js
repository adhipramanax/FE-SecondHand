import React from "react";
import MainLayout from "../../../layouts/Main.layout";
import CardSeller from "./CardSeller";
import Catalog from "./Catalog";

const Index = () => {
    return (
        <>
            <MainLayout>
                <CardSeller />
                <Catalog />
            </MainLayout>
        </>
    );
};

export default Index;
