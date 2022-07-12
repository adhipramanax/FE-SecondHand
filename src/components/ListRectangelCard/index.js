import React from 'react';

import RectangelCard from '../RectangelCard';

const Index = ({data}) => {
    return (
        <>
            <div class="row mt-4">
                {data.map((item, index) => {
                    return (
                        <RectangelCard data={item} />
                    );
                })}
            </div>   
        </>
    );
}

export default Index;
