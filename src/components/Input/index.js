import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
`

const Input = styled.input`
    border: 1px solid #D0D0D0;
    border-radius: 5px;
    display: block;
    width: 100%;
    padding: 12px 30px 12px 10px;
    margin-bottom: 15px;
    
    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px #4B1979;;
        border: 1px solid #4B1979;
    }
` 

const Icon = styled.i`
    position: absolute;
    right: 10px;
    bottom: 13px;
    margin-top: 5px;
`

const Index = ({label, type, name, id, value, placeholder, icon, onChange, onClick}) => {
    return (
        <>
            <Wrapper class="mb-3">
                <label for={id} class="form-label">{ label }</label>
                <Input type={type} class="form-control" name={name} id={id} value={value} placeholder={placeholder} onChange={onChange} />
                <Icon className={icon} onClick={onClick}></Icon>
            </Wrapper>
        </>
    );
}

export default Index;
