'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Xmark from '../Icons/Xmark'
import BurgerMenuIcon from '../Icons/BurgerMenuIcon'

import SmoothScrollLink from './SmoothScrollLink'
import CartContainer from './CartContainer'
import { useAuth } from '../context/AuthContext'
import UserCircleIcon from '../Icons/UserCircleIcon'
import UserMenu from './UserMenu'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { authCheckState, currentUser, isAuthenticated, setHiddenMenu } =
    useAuth()

  useEffect(() => {
    authCheckState()
  }, [authCheckState])

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
        onClick={handleMenuToggle}
        style={{ zIndex: 2 }}
      >
        {isOpen ? <Xmark /> : <BurgerMenuIcon />}
      </button>

      <div
        id='menu-hamburguesa'
        className={`absolute top-0 left-0 w-full h-screen md:flex md:justify-end md:static md:translate-x-0 md:h-auto bg-[#111] transition transform ${
          isOpen ? '-translate-x-0' : '-translate-x-full'
        }`}
        style={{ zIndex: 1 }}
      >
        <div className='  md:mt-0 mt-20 flex-col items-center md:flex-row flex justify-end md:gap-2 gap-3'>
          <ul className='flex flex-col md:flex-row text-5xl justify-center md:pt-0 pt-40 md:text-xl md:gap-3 lg:gap-9 gap-14 md:items-center order-2 md:order-1'>
            <li>
              <SmoothScrollLink
                href='#about'
                className='hover:text-amethyst-600'
                setIsOpen={setIsOpen}
              >
                Nosotros
              </SmoothScrollLink>
            </li>
            <li>
              <Link
                href='/products'
                onClick={() => setIsOpen(false)}
                className='hover:text-amethyst-600'
              >
                Productos
              </Link>
            </li>
            <li>
              <SmoothScrollLink
                href='#contact'
                className='hover:text-amethyst-600'
                setIsOpen={setIsOpen}
              >
                Contacto
              </SmoothScrollLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='md:inline-block h-6 border-l border-[#dfdddd] md:mr-3 border my-4 hidden' />
      <div className='flex gap-3 h-10' style={{ zIndex: 2 }}>
        <CartContainer />
        {currentUser && isAuthenticated ? (
          <>
            <UserCircleIcon onClick={handleUserMenuToggle} />
            <UserMenu />
          </>
        ) : (
          <Link href='/login' onClick={() => setIsOpen(false)}>
            <button className='px-3 py-2 text-sm border-solid border-[#bc02cb] rounded-md border '>
              Ingresar
            </button>
          </Link>
        )}
      </div>
    </>
  )
}

export default BurgerMenu
