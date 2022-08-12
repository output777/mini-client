import React from 'react'
import Button from '../elements/Button'

const Header = () => {
  return (
    <section class="hero mt-0">
      <div class="hero-body is-flex is-justify-content-space-between is-align-items-center" >
        <p class="title" style={{ color: '#fff' }}>
          CAMP
        </p>
        <div class="subtitle is-flex is-justify-content-space-between is-align-items-center" >
          <Button btnBg='no'>로그인</Button>
          <Button>회원가입</Button>
        </div>
      </div>
    </section>

  )
}

export default Header