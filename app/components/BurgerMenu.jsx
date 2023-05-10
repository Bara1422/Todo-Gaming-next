'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import Xmark from '../Icons/Xmark'
import BurgerMenuIcon from '../Icons/BurgerMenuIcon'
import Cart from './Cart'
import SmoothScrollLink from './SmoothScrollLink'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

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
        className={`absolute top-0 left-0 w-full h-screen md:flex md:justify-end  md:pt-3 md:mr-8 md:px-4 md:translate-x-0 md:h-auto bg-[#111] transition transform ${
          isOpen ? '-translate-x-0' : '-translate-x-full'
        }`}
        style={{ zIndex: 1 }}
      >
        <div className='  md:mt-0 mt-20 flex-col items-center md:flex-row flex justify-end gap-3'>
          <ul className='flex flex-col md:flex-row text-5xl justify-center md:pt-0 pt-40 md:text-xl md:gap-9 gap-14 md:items-center order-2 md:order-1'>
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
          <div className='flex pl-2 order-1 gap-10 md:mt-0 mt-10 md:gap-3 items-center md:order-2'>
            <div className='md:inline-block h-6 border-l border-[#dfdddd] md:mr-3 border my-4 hidden' />
            <Cart />
            <div className='pl-4 h-10'>
              <Link href='/login'>
                <button className='px-3 py-2 text-sm border-solid border-[#bc02cb] rounded-md border '>
                  Ingresar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu
