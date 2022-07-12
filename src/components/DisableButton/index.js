import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 0;
    border-radius: 16px;
    padding: 12px 24px;
    background-color: #8A8A8A !important;
    color: #FFFFFF;
    width: ${props => props.width}
`;

const DisableButton = ({text, width, icon, onClick }) => {
    return (
        <>
            <Button type='button' 
                    className='btn btn-primary'
                    width={width}
                    onClick={onClick}
                    disabled={true}
                    >
                    {icon ? <img src={icon} className="me-2" alt='Icon' /> : <></>}
                    { text }
            </Button>
        </>
    );
}

export default DisableButton;
