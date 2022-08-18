import styled from 'styled-components';



const Input = (({ id, name, className, type, placeholder, accept, value, changehandler, text, width, minLength, maxLength }) => {
    return (
        <div className="field">
            <FormInput
                id={id}
                className={className}
                type={type}
                name={name}
                accept={accept}
                placeholder={placeholder}
                width={width}
                value={value}
                onChange={changehandler}
                minLength={minLength}
                maxLength={maxLength}
            />
            <ConfirmP>{text}</ConfirmP>
        </div>
    )
})

Input.defaultValue = {
    value: '',
    defaultValue: '',
    id: '',
    name: '',
    placeholder: '',
    width: '',
    changeHandler: null,
};

export default Input;

const FormInput = styled.input`
    width : ${(props) => props.width};
    height : ${(props) => props.height};
    padding : ${(props) => props.padding};
    font-family: 'Pretendard-Regular';
`
const ConfirmP = styled.p`
    color : #2C3333;
    font-size: 0.7rem;
    margin : 10px 0;
    font-family: 'Pretendard-Regular';

`