import LayoutPage from '@/app/components/LayoutPage'
import OrderResumeById from '@/app/components/OrderResumeById'
import Wrapper from '@/app/components/Wrapper'

const OrderResume = ({ params }) => {
  const { id } = params

  return (
    <LayoutPage img='ordersBg.webp'>
      <Wrapper>
        <OrderResumeById id={id[0]} />
      </Wrapper>
    </LayoutPage>
  )
}

export default OrderResume
