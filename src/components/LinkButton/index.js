import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    border: 0;
    border-radius: 16px;
    padding: 12px 24px;
    background-color: ${props => props.bg} !important;
    color: ${props => props.color};
    width: ${props => props.width};
`;

const LinkButton = ({ to, color, bg, text, width, icon, onClick }) => {
    return (
        <>
            <Link href={to} 
                    className='btn btn-primary'
                    color={color}
                    bg={bg}
                    width={width}
                    onClick={onClick}
                    >
                    {icon ? <img src={icon} className="me-2" alt='Icon' /> : <></>}
                    { text }
            </Link>
        </>
    );
}

export default LinkButton;
