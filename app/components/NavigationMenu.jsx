import React from 'react'
import SmoothScrollLink from './SmoothScrollLink'
import Link from 'next/link'

const NavigationMenu = ({ isOpen, handleHiddenMenus }) => {
  return (
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
              className='py-1 animation-under'
              handleHiddenMenus={handleHiddenMenus}
            >
              Nosotros
            </SmoothScrollLink>
          </li>
          <li>
            <Link
              href='/products'
              className='py-1 animation-under'
              onClick={handleHiddenMenus}
            >
              Productos
            </Link>
          </li>
          <li>
            <SmoothScrollLink
              href='#contact'
              className='py-1 animation-under'
              handleHiddenMenus={handleHiddenMenus}
            >
              Contacto
            </SmoothScrollLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationMenu
