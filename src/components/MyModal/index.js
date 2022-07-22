import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
.modal-backdrop{
    background: rgba(0,0,0,0.4);
    height: 100%;
    width: 100%;
}

.modal-ui {
    position: fixed;
    background: #ffffff;
    border-radius: 16px;
    padding: 20px;
    width: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.modal-ui_header{
    display: flex;
    justify-content: flex-end;
}

.modal-ui_btnClose{
    background: transparent;
    font-size: 1.5rem;
    border: none;
    padding: 2px 10px;
}

@media only screen and (max-width: 576px) {
    .modal-ui {
        width: 95%;
    }
}

@media only screen and (min-width: 576px ) and (max-width: 768px) {
    .modal-ui {
        width: 45%;
    }
}

`

const Index = ({show, close, children}) => {

    // Return null if false
    if(!show) return null;

    return (
        <Wrapper>
            <div class="modal-backdrop">
                <div class="modal-ui">
                    <div class="modal-ui_header">
                        <button class="modal-ui_btnClose" onClick={close}><i class="bi bi-x"></i></button>
                    </div>
                    <div class="modal-ui_body">
                        {children}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Index;
