import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Wrapper from '../components/Wrapper'

import LoginForm from '../components/LoginForm'

export const metadata = {
  title: 'Ingresar | Todo-Gaming',
  description:
    'Todo-Gaming E-commerce dedicado a la venta de componentes para tu PC Gamer, seccion login'
}
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
