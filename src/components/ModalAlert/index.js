import React from 'react';
import Modal from '../MyModal'

const Index = ({show, close, message}) => {
    return (
        <>
            <Modal show={show} close={close}>
                <div class="alert alert-danger" role="alert">
                    <h5 class="text-center">{message}</h5>
                </div>
            </Modal>
        </>
    );
}

export default Index;
