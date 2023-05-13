import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Wrapper from '../components/Wrapper'

import SigninForm from '../components/SigninForm'

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
