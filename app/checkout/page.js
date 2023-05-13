import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import LayoutPage from '../components/LayoutPage'
import Wrapper from '../components/Wrapper'

const Checkout = () => {
  return (
    <LayoutPage img='checkoutBg.jpg'>
      <Wrapper>
        <CheckoutForm />
      </Wrapper>
    </LayoutPage>
  )
}

export default Checkout
