import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getAllOfferProduct } from "../../../services/offerService";

import ListUserCard from "../../../components/ListUserCard";
import MainLayout from "../../../layouts/Main.layout";

const Index = () => {
    const params = useParams();
    // console.log(params);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllOfferProduct(params.id).then((response) => setUsers(response.data.data));
    }, []);

    return (
        <>
            <MainLayout>
                <div class="container">
                    <ListUserCard data={users} optionCol="col-md-4" link={true}/>
                </div>
            </MainLayout>
        </>
    );
};

export default Index;
