import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa'
import Camping from '../assets/imgs/Camping.jpg'



const Item = ({ id, img, location, title, review }) => {
  const navigate = useNavigate();
  // const url = window.URL.createObjectURL(new Blob([img], { type: img.headers['content-type'] }));
  // console.log('img', url)
  const onClickItemHandler = () => {
    // e.preventdefault();
    navigate(`/detail/${id}`)
  }


  return (
    <StyledItemBox onClick={onClickItemHandler}>
      <div className="card" style={{ height: '300px' , cursor:'pointer'}}>
        <CardImgage className="card-image">
          <figure className="image">
            {img !== null &&
              <img src={img !== null && img} />
            }
          </figure>
        </CardImgage>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <TitleP className="title is-5">{title}</TitleP>
              <LocationP className="subtitle is-6"><FaMapMarkerAlt color="#EF4C1E" />{location}</LocationP>
            </div>
          </div>
          <Contentbox className="content">
            {review}
            <br />
          </Contentbox>
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
  font-family: 'Pretendard-Regular';

`

const CardImgage = styled.div`
  min-height: 150px;
  max-height: 150px;
  overflow: hidden;
`
const TitleP = styled.div`
  font-weight: bold;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
`
const LocationP = styled.div`
  height: 10px;
`

const Contentbox = styled.div`
  height: 40px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`