import React from 'react';

import imgEmptyState from '../../assets/images/empty-state.png';

const EmptyState = ({description}) => {
    return (
        <>
        <div class="row text-center mt-4">
            <div class="col-12">
                <img src={imgEmptyState} class='img-fluid' alt='empty-state' />
                <p class="mt-3">{description}</p>
            </div>
        </div>
        </>
    );
}

export default EmptyState;
