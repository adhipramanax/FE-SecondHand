import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 30px;

    .error{
        font-size: 12px;
        color: #FF5A5A;
        margin-top: 5px;
    }

    .input-group{
        position: relative;
    }
`

const Input = styled.input`
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

const Icon = styled.i`
    position: absolute;
    right: 10px;
    bottom: 12px;
    margin-top: 5px;
`

const Index = ({label, type, name, id, value, placeholder, erorr, icon, onChange, onClick}) => {
    return (
        <>
            <Wrapper>
                <label for={id} class="form-label">{ label }</label>
                <div class="input-group">
                    <Input type={type} class="form-control" name={name} id={id} value={value} placeholder={placeholder} onChange={onChange} />
                    <Icon className={icon} onClick={onClick}></Icon>
                </div>
                <p class="error">{erorr}</p>
            </Wrapper>
        </>
    );
}

export default Index;
