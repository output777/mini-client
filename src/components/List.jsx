import React from 'react'
import Modal from './Modal'
import styled from 'styled-components';
import Item from './Item';

const List = () => {
  return (
    <>
      <Modal />
      <StyledItemList>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </StyledItemList>
    </>
  )
}

export default List;

const StyledItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
`