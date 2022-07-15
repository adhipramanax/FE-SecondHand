import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getAllOfferProduct } from "../../../services/offerService";

import ListUserCard from "../../../components/ListUserCard";
import MainLayout from "../../../layouts/Main.layout";

const Index = () => {
    const params = useParams();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllOfferProduct(params.id).then((response) => setUsers(response.data.data));
    }, []);

    return (
        <>
            <MainLayout>
                <div class="container">
                    <ListUserCard data={{users, params}} optionCol="col-md-4" link={params.id}/>
                </div>
            </MainLayout>
        </>
    );
};

export default Index;
