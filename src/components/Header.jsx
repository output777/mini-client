import React from 'react'
import Button from '../elements/Button'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { __getCamps } from '../redux/modules/campSlice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

const Header = ({ user }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onClickLogoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(__getCamps())
    navigate('/');
  }

  return (
    <section className="hero mt-0">
      <div className="hero-body is-flex is-justify-content-space-between is-align-items-center" >
        <p className="title" style={{ color: '#fff' }}>
          CAMP
        </p>
        <div className="subtitle is-flex is-justify-content-space-between is-align-items-center" >
          {user
            ?
            <>
              <StyledIdText>{user}님 환영합니다</StyledIdText>
              <Button onClickHandler={onClickLogoutHandler}>로그아웃</Button >
            </>
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