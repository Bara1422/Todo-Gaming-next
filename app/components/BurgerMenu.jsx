'use client'

import React, { useState } from 'react'
import BurgerMenuIcon from '../Icons/BurgerMenuIcon'
import Xmark from '../Icons/Xmark'

import Link from 'next/link'
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
              >
                Nosotros
              </SmoothScrollLink>
            </li>
            <li>
              <Link href='/products' className='hover:text-amethyst-600'>
                Productos
              </Link>
            </li>
            <li>
              <SmoothScrollLink
                href='#contact'
                scroll
                className='hover:text-amethyst-600'
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

/*
{isOpen && (
  <div
  className='fixed top-0 left-0 z-50 w-full h-full bg-gray-900 opacity-50'
  onClick={() => setIsOpen(false)}
  />
      )}

      <div
        className={`w-full md:block md:w-auto  ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul
          className={`flex gap-3 text-xl ${
            isOpen
              ? 'max-h-fit opacity-100'
              : 'max-h-0 opacity-0 md:opacity-100 md:max-h-fit'
          }`}
        >
          <li>
            <Link href='#nosotros' className='hover:text-amethyst-600'>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href='/products' className='hover:text-amethyst-600'>
              Productos
            </Link>
          </li>
          <li>
            <Link href='#nosotros' className='hover:text-amethyst-600'>
              Contacto
            </Link>
          </li>
        </ul>
        <div className='flex pl-2'>
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
*/

/*
<div
        className='w-full md:block  md:w-auto md:max-h-fit overflow-hidden md:overflow-visible px-4 z-[60] '
        id='navbar-default'
      >
        <ul className=' font-semibold flex flex-col '>
          <li>
            <Link href='#nosotros' className='hover:text-amethyst-600 '>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href='/products' className='hover:text-amethyst-600'>
              Productos
            </Link>
          </li>
          <li>
            <Link href='#nosotros' className='hover:text-amethyst-600'>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
*/

/*
 <div>
      <button
        data-collapse-toggle='navbar-default'
        type='button'
        className='inline-flex items-end p-2 md:mr-4 ml-3 text-sm z-[60] text-gray-500 md:hidden'
        aria-controls='navbar-default'
        aria-expanded='false'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='sr-only'>Open main menu</span>
        <BurgerMenuIcon aria-label='Open main menu' />
      </button>

      {isOpen && (
        <div
          className='fixed top-0 left-0 z-50 w-full h-full bg-gray-900 opacity-50'
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`w-full md:block  md:w-auto md:max-h-fit overflow-hidden md:overflow-visible px-4 z-[60] ${
          isOpen ? 'block' : 'hidden'
        } `}
        id='navbar-default'
      >
        <ul
          className={`${
            isOpen
              ? 'max-h-fit  opacity-100'
              : 'max-h-0 -translate-y-[300px] opacity-0 md:opacity-100 md:max-h-fit md:translate-y-0 '
          } font-semibold flex flex-col md:items-center p-4 md:p-0 mt-4  border md:transition-none transition-all duration-300 border-gray-50 bg-slate-200 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
        >
          <li>
            <Link href='#nosotros' className='hover:text-amethyst-600'>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href='/products' className='hover:text-amethyst-600 '>
              Productos
            </Link>
          </li>
          <li>
            <Link href='#nosotros' className='hover:text-amethyst-600'>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
*/
