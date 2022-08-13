import React from 'react'
import styled from 'styled-components';
import Button from '../elements/Button';


const Modal = ({ onClickModalHandler }) => {

  return (
    <StyledModalBtn>
      <Button size='lg' onClickModalHandler={onClickModalHandler}>나만의 캠핑장 등록하기</Button>
    </StyledModalBtn>
  )
}

export default Modal;

const StyledModalBtn = styled.div`
  position: relative;
  top:-30px;
  text-align: center;
`
