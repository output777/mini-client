import React from 'react'
import styled from 'styled-components';
import Camping from '../assets/imgs/Camping.jpg'


const Item = ({ id, img, locationon, title, review, onClickItemHandler }) => {

  return (
    <StyledItemBox onClick={onClickItemHandler}>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">

              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">@{locationon}</p>

            </div>
          </div>

          <div className="content">

            {review}

            <br />
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