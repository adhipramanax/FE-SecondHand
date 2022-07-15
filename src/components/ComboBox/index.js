import React from 'react';
import styled from 'styled-components';
import Multiselect from 'multiselect-react-dropdown';

const Wrapper = styled.div`
    margin-bottom: 30px;

    .error{
        font-size: 12px;
        color: #FF5A5A;
        margin-top: 5px;
    }
`


const Index = ({label, erorr, ...otherProps }) => {
    return (
        <Wrapper>
            <div class="mb-3">
                <label class="form-label">{ label }</label>
                <Multiselect
                    {...otherProps}
                />
                <p class="error">{erorr}</p>
            </div>
        </Wrapper>
    );
}

export default Index;
