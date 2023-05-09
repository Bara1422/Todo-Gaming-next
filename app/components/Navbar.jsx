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

/*
<header className=' p-5 flex items-center justify-between w-full bg-[#111] z-50 text-white border-b border-solid border-[#e5edef] pl-1 sm:pl-0'>
      <nav className='flex justify-between w-full'>
        <Link
        href='/'
        className='flex gap-2 items-end ml-8 hover:text-amethyst-600'
        >
          <Image src='/Logo.png' width={40} height={40} alt='Logo Icon' />
          <h2 className='text-3xl'>Todo-Gaming</h2>
        </Link>
        <BurgerMenu />
      </nav>
    </header>
    */

/*
        <header className='relative'>
      <nav className='bg-[#111] p-4 shadow-md text-white'>
        <div className='flex justify-between w-full items-center'>
          <Link href='/' className='hover:text-amethyst-600 flex gap-2 ml-8'>
            <Image src='/Logo.png' width={40} height={40} alt='Logo Icon' />
            <span className='text-xl font-bold' style={{ zIndex: 2 }}>
              Logo
            </span>
          </Link>

          <BurgerMenu />
        </div>
      </nav>
    </header>
    */
