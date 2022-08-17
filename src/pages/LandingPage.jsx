import React, { useEffect } from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout';
import Main from '../components/Main';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { __getCamps } from '../redux/modules/campSlice';

const LandingPage = () => {
  const dispatch = useDispatch();
  const { camps, user } = useSelector((state) => state.camps)

  useEffect(() => {
    dispatch(__getCamps())
  }, [dispatch])


  return (
    <StyledLandingPage>
      <Layout>
        <Main camps={camps} user={user} />
      </Layout>
    </StyledLandingPage>
  )
}

export default LandingPage;

const StyledLandingPage = styled.div`
  width:100%;
  min-height:100vh;
  height: 100%;
  background: linear-gradient(90deg, rgba(19,41,55,1) 30%, rgba(27,62,82,1) 77%);
`