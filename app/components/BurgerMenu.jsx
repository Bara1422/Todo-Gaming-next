'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

import Xmark from '../Icons/Xmark'
import BurgerMenuIcon from '../Icons/BurgerMenuIcon'
import CartContainer from './CartContainer'
import UserCircleIcon from '../Icons/UserCircleIcon'
import { useAuth } from '../context/AuthContext'
import { useAppDispatch } from '../redux/hooks'
import { cartHidden } from '../redux/features/cartSlice'
import UserMenu from './UserMenu'
import NavigationMenu from './NavigationMenu'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { authCheckState, currentUser, isAuthenticated, setHiddenMenu } =
    useAuth()

  useEffect(() => {
    authCheckState()
  }, [authCheckState, isAuthenticated])

  const handleHiddenMenus = useCallback(() => {
    setIsOpen(false)
    dispatch(cartHidden())
  }, [dispatch, setIsOpen])

  const handleMenuToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleUserMenuToggle = () => {
    setHiddenMenu((prevState) => !prevState)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <button
        className=' focus:outline-none md:hidden'
        aria-label='Abrir o cerrar Menu desplegable'
        onClick={handleMenuToggle}
        style={{ zIndex: 2 }}
      >
        {isOpen ? <Xmark /> : <BurgerMenuIcon />}
      </button>
      <NavigationMenu isOpen={isOpen} handleHiddenMenus={handleHiddenMenus} />
      <div className='md:inline-block h-6 border-l border-[#dfdddd] md:mr-3 border my-4 hidden' />
      <div className='flex gap-3 h-10' style={{ zIndex: 2 }}>
        <CartContainer />
        {currentUser && isAuthenticated ? (
          <>
            <UserCircleIcon onClick={handleUserMenuToggle} />
            <UserMenu />
          </>
        ) : (
          <Link href='/login' onClick={handleHiddenMenus} className=''>
            <button className='px-3 py-2 text-sm border-solid hover:border-amethyst-600 rounded-md border'>
              Ingresar
            </button>
          </Link>
        )}
      </div>
    </>
  )
}

export default BurgerMenu
