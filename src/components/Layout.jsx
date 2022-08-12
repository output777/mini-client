import React from 'react'

const Layout = ({children}) => {
  return (
    <div class="container">
      <div class="notification is-primary">
        {children}
      </div>
    </div>
  )
}

export default Layout