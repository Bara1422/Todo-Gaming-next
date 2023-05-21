'use client'

import React, { useEffect, useMemo, useState, Suspense, lazy } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Modal, ModalOverlay, Spinner, useDisclosure } from '@chakra-ui/react'
import CardSummary from './CardSummary'
import FormStyled from './FormStyled'
import { useAuth } from '@/app/context/AuthContext'
import { useCreateOrder } from '../hooks/useCreateOrder'
import CustomButton from './CustomButton'
import CheckoutFormIndex from './CheckoutFormInput'
import { useRouter } from 'next/navigation'

const COSTOENVIO = 250
const LazyModalContent = lazy(() => import('./ModalContentSection'))
const CheckoutForm = () => {
  const { currentUser } = useAuth()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { createOrder, initPoint, isLoading } = useCreateOrder()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const [shipping, setShipping] = useState(null)

  const subTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  }, [cartItems])

  const items = useMemo(() => {
    return cartItems.map((product) => {
      return {
        title: product.name,
        quantity: product.quantity,
        unitPrice: product.price,
        productId: product.id
      }
    })
  }, [cartItems])

  useEffect(() => {
    if (!currentUser) {
      router.push('/login')
    }
  }, [currentUser, router])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    setShipping(data)
    reset()
    await createOrder(
      currentUser?.userId,
      data.domicilio,
      data.localidad,
      items,
      subTotal
    )
    onOpen()
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div className=' p-7 rounded-md bg-white shadow-lg w-full gap-3 flex flex-col text-black'>
        <CheckoutFormIndex
          label='Domicilio'
          name='domicilio'
          register={register}
          errors={errors}
        />

        <CheckoutFormIndex
          label='Localidad'
          name='localidad'
          register={register}
          errors={errors}
        />

        <CardSummary subTotal={subTotal} envio={COSTOENVIO} />

        <CustomButton w='full'>
          {isLoading ? <Spinner size='xs' /> : 'Pagar'}
        </CustomButton>
      </div>

      <Suspense>
        <Modal onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <LazyModalContent
            shipping={shipping}
            items={items}
            subTotal={subTotal}
            initPoint={initPoint}
            onClose={onClose}
            router={router}
          />
        </Modal>
      </Suspense>
    </FormStyled>
  )
}

export default CheckoutForm
