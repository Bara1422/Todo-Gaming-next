import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Cart from './Cart'

const Navbar = () => {
  return (
    <header className='p-5 flex items-center justify-between w-full bg-[#111] z-50 text-white border-b border-solid border-[#e5edef] pl-1 sm:pl-0'>
      <nav className='flex justify-between w-full'>
        <Link
          href='/'
          className='flex gap-2 items-end ml-8 hover:text-amethyst-600'
        >
          <Image src='/Logo.png' width={40} height={40} alt='Logo Icon' />
          <h2 className='text-3xl'>Todo-Gaming</h2>
        </Link>
        <div className='flex items-center divide-x-[1px] gap-4'>
          <div className='flex gap-3 text-xl '>
            <Link href='#nosotros' className='hover:text-amethyst-600'>
              Nosotros
            </Link>
            <Link href='/products' className='hover:text-amethyst-600'>
              Productos
            </Link>
            <Link href='#nosotros' className='hover:text-amethyst-600'>
              Contacto
            </Link>
          </div>
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
      </nav>
    </header>
  )
}

export default Navbar
