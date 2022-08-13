import React from 'react'
import styled from 'styled-components';
import Bg from '../assets/imgs/LandingBg.jpg'



const Background = ({ children }) => {
  return (
    <StyledBg>
      {children}
      <StyledTitleBox>
        <p className="title is-1 has-text-white">Discover <br />Your Next Camping</p>
        <p className="subtitle is-4" style={{ color: '#BA9D78' }}>
          추천하고 싶은 나만의 캠핑장을 공유하세요<br />
        </p>
      </StyledTitleBox>
    </StyledBg>
  )
}


const StyledBg = styled.div`
  width: 100%;
  min-width:769px;
  height: 600px;
  background-image: url(${Bg});
  background-size: cover;
  background-position: 0 center;
  background-repeat: no-repeat; 
  position: relative;
`

const StyledTitleBox = styled.div`
  position: absolute;
  bottom: 50%;
  right: 10%;
`

export default Background;