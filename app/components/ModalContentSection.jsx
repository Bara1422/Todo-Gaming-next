import {
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  Button
} from '@chakra-ui/react'
import React from 'react'
import ItemsInThePurchase from './ItemsInThePurchase'
import { formatPrice } from '@/data'
import Link from 'next/link'
import { useAppDispatch } from '../redux/hooks'
import { resetCart } from '../redux/features/cartSlice'

const ModalContentSection = ({
  shipping,
  items,
  subTotal,
  onClose,
  initPoint,
  router
}) => {
  const dispatch = useAppDispatch()

  const handleCart = () => {
    dispatch(resetCart())
    router.push('/my-orders')
  }

  const onPurchase = () => {
    window.open(initPoint)
    onClose()
    handleCart()
  }

  return (
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
              <ItemsInThePurchase product={product} key={index} />
            ))}
          </span>
        </Text>
        <Text fontSize='2xl' pt={4}>
          <span className='font-bold'>Subtotal:</span> {formatPrice(subTotal)}
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Cerrar
        </Button>
        <Link href='/my-orders'>
          <Button colorScheme='green' onClick={onPurchase}>
            Pagar
          </Button>
        </Link>
      </ModalFooter>
    </ModalContent>
  )
}

export default ModalContentSection
