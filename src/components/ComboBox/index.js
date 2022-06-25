import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    border: 1px solid #D0D0D0;
    border-radius: 16px;
    display: block;
    width: 100%;
    padding: 12px 30px 12px 10px;
    
    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px #4B1979;;
        border: 1px solid #4B1979;
    }
` 


const Index = ({label, name, id, selected, onChange, children}) => {
    return (
        <>
            <div class="mb-3">
                <label for={id} class="form-label">{ label }</label>
                <Select class="form-select" name={name} id={id} aria-label="Default select example" onChange={onChange}>
                    <option selected>{selected}</option>
                    {children}
                </Select>
            </div>
        </>
    );
}

export default Index;
