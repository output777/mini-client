import styled, { css } from 'styled-components';

const Input = (({labelText,isHide})=>{
    return(
        <div>
            <label>{labelText}</label>
            <FormInput></FormInput>
        </div>

    )
})

export default Input;

const FormInput = styled.input`
    width : 150px;
    height: 20px;
`

 