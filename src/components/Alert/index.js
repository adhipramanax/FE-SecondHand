import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
.alert-ui{
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 12px 10px;
    border-radius: 16px;
    width: 40%;
    top: 145px;
    left: 45%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}

.alert-ui_btnClose{
    background: transparent;
    font-size: 1.5rem;
    border: none;
    color: #fff;
    margin: 0;
    padding: 0;
}

.success{
    background: #73CA5C;
}

.danger{
    background: #FF5A5A;
}

    @media only screen and (max-width: 767px) {
        .alert-ui{
            left: 40%;
            width: 80%;
        }
    }
`

const Index = ({show, close, type, message, optionClass}) => {
    // Return null if false
    if(!show) return null;
    
    return (
        <Wrapper>
            <div class={`alert-ui ${type === 'success' ? 'success' : 'danger' } ${optionClass}`} role="alert">
                {message}
                <button class="alert-ui_btnClose" onClick={close}><i class="bi bi-x"></i></button>
            </div>
        </Wrapper>
    );
}

export default Index;
