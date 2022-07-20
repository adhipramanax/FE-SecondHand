import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { getAllOfferProduct } from "../../../services/offerService";

import ListUserCard from "../../../components/ListUserCard";
import MainLayout from "../../../layouts/Main.layout";

const Wrapper = styled.div`
    @media only screen and (max-width: 767px) {
        position: relative;
        top: 80px;
    }
`

const Index = () => {
    const params = useParams();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllOfferProduct(params.id).then((response) => setUsers(response.data.data));
    }, []);;

    return (
        <>
            <MainLayout>
                <Wrapper>
                    <div class="container">
                        <ListUserCard data={{users, params}} optionCol="col-md-4" link={params.id}/>
                    </div>
                </Wrapper>
            </MainLayout>
        </>
    );
};

export default Index;
