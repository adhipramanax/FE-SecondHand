import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
    border: 1px solid #D0D0D0;
    border-radius: 5px;
    display: block;
    width: 100%;
    padding: 12px 30px 12px 10px;
    
    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px #4B1979;;
        border: 1px solid #4B1979;
    }
` 

const Index = ({label, name, id, onChange}) => {
    return (
        <>
            <div class="mb-3">
                <label for={id} class="form-label">{ label }</label>
                <TextArea class="form-control" name={name} id={id} rows="3" onChange={onChange}></TextArea>
            </div>
        </>
    );
}

export default Index;
