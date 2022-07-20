import React from "react";

import UserCard from "../UserCard";

const Index = ({ data, optionCol, link = false }) => {
    return (
        <>
            <div class="row">
                {data.users.map((user) => {
                    return <UserCard data={user} optionCol={optionCol} link={{link, user: user.id}} />;
                })}
            </div>
        </>
    );
};

export default Index;
