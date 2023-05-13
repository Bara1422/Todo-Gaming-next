import React from 'react'
import MyOrders from '../components/MyOrders'
import Wrapper from '../components/Wrapper'
import LayoutPage from '../components/LayoutPage'

const Orders = () => {
  return (
    <LayoutPage img='ordersBg.jpg'>
      <Wrapper>
        <MyOrders />
      </Wrapper>
    </LayoutPage>
  )
}

export default Orders
