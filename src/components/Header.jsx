import React from 'react'
import Button from '../elements/Button'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Header = ({ user }) => {
  let navigate = useNavigate();

  return (
    <section className="hero mt-0">
      <div className="hero-body is-flex is-justify-content-space-between is-align-items-center" >
        <p className="title" style={{ color: '#fff' }}>
          CAMP
        </p>
        <div className="subtitle is-flex is-justify-content-space-between is-align-items-center" >
          {user
            ? <StyledIdText>{user}님 환영합니다</StyledIdText>
            :
            <>
              <Button btnBg='no' onClickHandler={() => navigate('/login')}>로그인</Button >
              <Button onClickHandler={() => navigate('/register')}> 회원가입</Button>
            </>
          }
        </div>
      </div>
    </section >

  )
}

export default Header;

const StyledIdText = styled.p`
  color: #fff;
  font-size:1rem;
  padding:1rem;
`