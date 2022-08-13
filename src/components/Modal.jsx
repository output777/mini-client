import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../elements/Button';
import Form from './Form';


const Modal = () => {
  const [register, setRegister] = useState(false);
  const onClickModalOpenHandler = () => {
    setRegister(true);
    console.log(register);
  }

  return (
    <>
      <Form />
      {register ? <div><Form /></div> :
        <StyledModalBtn>
          <Button size='lg' onClickModalOpenHandler={onClickModalOpenHandler}>나만의 캠핑장 등록하기</Button>
        </StyledModalBtn>
      }
    </>
  )
}

export default Modal;

const StyledModalBtn = styled.div`
  position: relative;
  top:-30px;
  text-align: center;
`
