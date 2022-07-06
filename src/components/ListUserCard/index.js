import React from "react";

import UserCard from "../UserCard";

const Index = ({ data, optionCol }) => {
    return (
        <>
            <div class="row">
                {data.map((user) => {
                    return <UserCard data={user} optionCol={optionCol} />;
                })}
            </div>
        </>
    );
};

export default Index;
