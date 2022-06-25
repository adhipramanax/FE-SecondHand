import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid ${props => props.bg};
    border-radius: 16px;
    padding: 12px 24px;
    background-color: transparent !important;
    color: ${props => props.color};
    width: ${props => props.width}
`;

const OutlineButton = ({ color, bg, text, width, icon, onClick }) => {
    return (
        <>
            <Button type='button' 
                    className='btn btn-primary'
                    color={color}
                    bg={bg}
                    width={width}
                    onClick={onClick}
                    >
                    {icon ? <img src={icon} className="me-2" alt='Icon' /> : <></>}
                    { text }
            </Button>
        </>
    );
}

export default OutlineButton;
