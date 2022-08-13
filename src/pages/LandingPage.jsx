import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout';
import Main from '../components/Main';

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Layout>
        <Main />
      </Layout>
    </StyledLandingPage>
  )
}

export default LandingPage;

const StyledLandingPage = styled.div`
  width:100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(19,41,55,1) 30%, rgba(27,62,82,1) 77%);
`