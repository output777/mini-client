import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import styled from 'styled-components';
import Item from './Item';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getCamps } from '../redux/modules/campSlice';

const List = () => {
  const dispatch = useDispatch()
  const camps = useSelector(state => state.camps.camps)
  let navigate = useNavigate();



  console.log(camps)

  const [register, setRegister] = useState(false);

  const onClickModalHandler = () => {
    setRegister((prev) => !prev);
    console.log(register);
  }

  const onClickItemHandler = () => {
    navigate(`./detail`)
  }
  useEffect(()=>{
    dispatch(__getCamps())
  },[dispatch])

  return (
    <>
      {register ?
        <StyledFormBox>
          <Form onClickModalHandler={onClickModalHandler} />
        </StyledFormBox> :
        <div>
          <Modal onClickModalHandler={onClickModalHandler} register={register} />
          <StyledItemList>
            {camps.length !== 0 && camps.map((camp)=>(
              <Item key={camp.id} camp={camp}onClickItemHandler={onClickItemHandler} />)
            )}
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

