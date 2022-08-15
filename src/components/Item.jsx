import React from 'react'
import styled from 'styled-components';
import Camping from '../assets/imgs/Camping.jpg'

const Item = ({ onClickItemHandler,camp}) => {
  
  return (
    <StyledItemBox onClick={onClickItemHandler}>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={Camping} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{camp.title}</p>
              <p className="subtitle is-6">{camp.id}</p>
            </div>
          </div>

          <div className="content">
            {camp.review} <a>{camp.location}</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </StyledItemBox>
  )
}

export default Item;

const StyledItemBox = styled.div`
  margin: 3rem 1rem;
  width: calc(25% - 2rem);
  min-width:256px;
  height: auto;
`