import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Wrapper from '../components/Wrapper'

import SigninForm from '../components/SigninForm'

export const metadata = {
  title: 'Registrarse | Todo-Gaming',
  description:
    'Todo-Gaming E-commerce dedicado a la venta de componentes para tu PC Gamer, seccion registro'
}
const Signin = () => {
  return (
    <LayoutPage img='loginBg.jpeg'>
      <Wrapper>
        <SigninForm />
      </Wrapper>
    </LayoutPage>
  )
}

export default Signin
