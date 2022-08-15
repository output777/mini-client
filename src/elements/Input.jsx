import styled from 'styled-components';



const Input = (({ id, name, className, type, placeholder, accept, value, changehandler, text, width }) => {
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
                value={value}
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
`
const ConfirmP = styled.p`
    color : black;
    font-size: 12px;
    margin : 10px 0;

`