import React, { useState } from 'react'
import Modal from './Modal'
import styled from 'styled-components';
import Item from './Item';
import Form from './Form';

const List = () => {
  const [register, setRegister] = useState(false);

  const onClickModalHandler = () => {
    setRegister((prev) => !prev);
    console.log(register);
  }
  return (
    <>
      {register ?
        <StyledFormBox>
          <Form onClickModalHandler={onClickModalHandler} />
        </StyledFormBox> :
        <div>
          <Modal onClickModalHandler={onClickModalHandler} register={register} />
          <StyledItemList>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </StyledItemList>
        </div>
      }
    </>
  )
}

export default List;

const StyledFormBox = styled.div`
  width: 100vw;
  height:100vh;
  background-color: rgba(19,41,55);
  padding: 2rem;
  top:0;
  left:0;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content:center;


`

const StyledItemList = styled.div`
      display: flex;
      flex-wrap: wrap;
      `

