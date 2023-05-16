'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure
} from '@chakra-ui/react'

import CardSummary from './CardSummary'
import FormStyled from './FormStyled'
import { useAuth } from '@/app/context/AuthContext'
import { useCreateOrder } from '../hooks/useCreateOrder'
import { formatPrice } from '@/data'
import { useAppDispatch } from '../redux/hooks'
import { resetCart } from '../redux/features/cartSlice'
import CustomButton from './CustomButton'

const COSTOENVIO = 250
const CheckoutForm = () => {
  const { currentUser } = useAuth()
  const dispatch = useAppDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { createOrder, initPoint, isLoading } = useCreateOrder()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const [shipping, setShipping] = useState(null)

  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const items = cartItems.map((product) => {
    return {
      title: product.name,
      quantity: product.quantity,
      unitPrice: product.price,
      productId: product.id
    }
  })

  useEffect(() => {
    if (!currentUser) {
      redirect('/login')
    }
  }, [currentUser])

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

  const handleCart = () => {
    dispatch(resetCart())
    redirect('/my-orders')
  }

  const onPurcharse = () => {
    window.open(initPoint)
    onClose()
    handleCart()
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div className=' p-7 rounded-md bg-white shadow-lg w-full gap-3 flex flex-col text-black'>
        <label htmlFor='domicilio' className='font-bold px-1'>
          Domicilio
        </label>
        <div className='flex items-center justify-start flex-col relative bg-gray-100 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
          <input
            className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
            {...register('domicilio', { required: true })}
          />
        </div>
        {errors.domicilio && (
          <span className='text-red-600 font-semibold pl-1'>
            Este campo es requerido
          </span>
        )}

        <label htmlFor='localidad' className='font-bold px-1'>
          Localidad
        </label>
        <div className='flex items-center justify-start flex-col relative bg-gray-100 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
          <input
            className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
            {...register('localidad', { required: true })}
          />
        </div>
        {errors.localidad && (
          <span className='text-red-600 font-semibold pl-1'>
            Este campo es requerido
          </span>
        )}

        <CardSummary subTotal={subTotal} envio={COSTOENVIO} />

        <CustomButton w='full'>
          {isLoading ? <Spinner size='xs' /> : 'Pagar'}
        </CustomButton>
      </div>

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent color='black'>
          <ModalHeader fontSize='3xl'>
            Verifica que los datos sean correctos
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize='lg'>
              <span className='font-semibold text-xl'>Direccion:</span>{' '}
              {shipping?.domicilio}
            </Text>
            <Text fontSize='lg'>
              <span className='font-semibold text-xl'>Localidad: </span>
              {shipping?.localidad}
            </Text>
            <Text fontSize='xl'>
              <span className='font-semibold'>Productos:</span>{' '}
              <span className='flex flex-col gap-2'>
                {items.map((product, index) => (
                  <span className='text-base flex flex-col' key={index}>
                    {product.title}.
                    <span className='flex'>Cantidad: {product.quantity}.</span>
                    <span className='flex'>
                      Precio unitario: {formatPrice(product.unitPrice)}.
                    </span>
                  </span>
                ))}
              </span>
            </Text>
            <Text fontSize='2xl' pt={4}>
              <span className='font-bold'>Subtotal:</span>{' '}
              {formatPrice(subTotal)}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Link href='/my-orders'>
              <Button colorScheme='green' onClick={onPurcharse}>
                Pagar
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FormStyled>
  )
}

export default CheckoutForm
