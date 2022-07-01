import React from "react";

import UserCard from "../UserCard";

const Index = ({ data }) => {
    return (
        <>
            <div class="row">
                {data.map((user) => {
                    return <UserCard data={user} />;
                })}
            </div>
        </>
    );
};

export default Index;
