import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 25px;
`;

const Link = styled.a`
    color: #000000;
    text-decoration: none;

    &:hover {
        color: #000000;
    }
`;

const LinkButton = ({ to, text, onClick }) => {
    return (
        <>
            <Wrapper>
                <Link href={to} onClick={onClick}>
                    {text}
                </Link>
            </Wrapper>
        </>
    );
};

export default LinkButton;
