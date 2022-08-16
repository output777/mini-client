import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import styled from 'styled-components';
import Item from './Item';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { __getCamps } from '../redux/modules/campSlice';

const List = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const { camps } = useSelector((state) => state.camps)
  

  const onClickModalHandler = () => {
    setRegister((prev) => !prev);
  }

  useEffect(() => {
    dispatch(__getCamps())
  }, [dispatch])


  return (
    <>
      {register ?
        <StyledFormBox>
          <Form onClickModalHandler={onClickModalHandler} />
        </StyledFormBox> :
        <div>
          <Modal onClickModalHandler={onClickModalHandler} />
          <StyledItemList>

            {camps.length !== 0 && camps.map((data) => (
              <Item
                key={data.id}
                id={data.id}
                img={data.img}
                location={data.location}
                title={data.title}
                review={data.review}
              />
            ))}
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

