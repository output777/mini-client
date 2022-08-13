import styled from 'styled-components';

const Input = (({ className, type, placeholder , value , changehandler, text ,width}) => {
    return (
        <div className="field">
            <FormInput className={className} type={type} placeholder={placeholder} width={width}></FormInput>
            <ConfirmP>{text}</ConfirmP>
        </div>
    )
})
export default Input;

const FormInput = styled.input`
    width : ${(props) => props.width};
    height : ${(props) => props.height};
    padding : ${(props) => props.padding};
`
const ConfirmP = styled.p`
    color : black;
    font-size: 12px;
    margin : 10px 0;

`