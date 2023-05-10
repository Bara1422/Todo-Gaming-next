import React from 'react'

import BurgerMenu from './BurgerMenu'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='relative'>
      <nav className='bg-[#111] p-4 shadow-md text-white fixed w-full'>
        <div className='flex justify-between w-full items-center '>
          <Link
            href='/'
            className='hover:text-amethyst-600 flex items-end gap-2 ml-3'
            style={{ zIndex: 2 }}
          >
            <Image src='/Logo.png' width={40} height={40} alt='Logo Icon' />
            <span className='text-xl font-bold'>Todo-Gaming</span>
          </Link>

          <BurgerMenu />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
