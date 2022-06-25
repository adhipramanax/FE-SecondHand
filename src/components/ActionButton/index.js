import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 0;
    border-radius: 16px;
    padding: 12px 24px;
    background-color: ${props => props.bg} !important;
    color: ${props => props.color};
    width: ${props => props.width}
`;

const ActionButton = ({ color, bg, text, width, icon, onClick }) => {
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

export default ActionButton;
