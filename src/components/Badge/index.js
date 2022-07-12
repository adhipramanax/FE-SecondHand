import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    .bg-purple {
        background-color: #4B1979;
    }
`

const Index = ({type, text}) => {
    return (
        <>
            <Wrapper>
                <span class={`ms-2 px-3 badge rounded-pill ${type === 'success' ? 'bg-success' : type === 'failed' ? 'bg-danger' : 'bg-purple'}`}>
                    {type === 'success' ? 'Berhasil' : type === 'failed' ? 'Ditolak' : 'Menunggu'}
                </span>
            </Wrapper>
        </>
    );
}

export default Index;
