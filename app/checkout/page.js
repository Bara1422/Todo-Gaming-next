import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import LayoutPage from '../components/LayoutPage'
import Wrapper from '../components/Wrapper'
export const metadata = {
  title: 'Orden | Todo-Gaming',
  description:
    'Todo-Gaming E-commerce dedicado a la venta de componentes para tu PC Gamer, seccion orden actual'
}
const Checkout = () => {
  return (
    <LayoutPage img='checkoutBg.webp'>
      <Wrapper>
        <CheckoutForm />
      </Wrapper>
    </LayoutPage>
  )
}

export default Checkout
