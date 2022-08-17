import React from 'react'
import Background from './Background'
import Header from './Header'
import List from './List';

const Main = ({ camps, user }) => {
  return (
    <>
      <Background>
        <Header user={user} />
      </Background>
      <List camps={camps} user={user} />
    </>
  )
}

export default Main