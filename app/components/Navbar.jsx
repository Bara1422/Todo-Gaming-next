import React from 'react'

import BurgerMenu from './BurgerMenu'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='relative'>
      <nav className='bg-[#111] p-4 shadow-md text-white fixed w-full z-50'>
        <div
          className='flex justify-between w-full items-center'
          style={{ zIndex: 999 }}
        >
          <Link
            href='/'
            className='hover:text-amethyst-600 flex items-end gap-2 ml-3'
            style={{ zIndex: 2 }}
          >
            <Image
              src='/Logo.png'
              width={40}
              height={40}
              alt='Logo Icon'
              style={{ height: 'auto', width: 'auto' }}
            />
            <span className='text-3xl hidden md:block font-bold'>
              Todo-Gaming
            </span>
          </Link>

          <div className='flex pl-2  order-1 gap-7 md:mt-0 md:gap-4 lg:gap-3 items-center md:order-2'>
            <BurgerMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
