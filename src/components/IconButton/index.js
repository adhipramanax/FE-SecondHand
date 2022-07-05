import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0;
    margin-right: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;

    i {
        font-size: 25px;
        color: #000000;
    }
`;

const LinkButton = ({ to, icon, onClick }) => {
    return (
        <>
            <Wrapper>
                <a href={to} onClick={onClick}>
                    <i class={icon}></i>
                </a>
            </Wrapper>
        </>
    );
};

export default LinkButton;
