import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0;
    margin-right: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;

    button {
        padding: 0;
    }

    button:focus {
        box-shadow: none;
    }

    i {
        font-size: 25px;
        color: #000000;
    }

    .badge{
        position: absolute;
        right: 15px;
        background: red;
        border-radius: 100%;
        color: #ffffff;
        font-size: .7rem;
    }
`;

const LinkButton = ({ to, icon, text, badge = false,onClick }) => {
    return (
        <>
            <Wrapper>
                <button class="btn" onClick={onClick}>
                    <i class={icon}></i>
                    {badge && <span class="badge">{text}</span>}
                </button>
            </Wrapper>
        </>
    );
};

export default LinkButton;
