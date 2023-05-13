import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Wrapper from '../components/Wrapper'

import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <LayoutPage img='loginBg.jpeg'>
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </LayoutPage>
  )
}

export default Login
