import React from 'react'
import Background from './Background'
import Header from './Header'
import List from './List';

const Main = () => {
  return (
    <>
      <Background>
        <Header />
      </Background>
      <List />
    </>
  )
}

export default Main