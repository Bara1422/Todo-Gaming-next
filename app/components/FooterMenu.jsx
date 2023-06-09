import Link from 'next/link'

import React from 'react'
import SmoothScrollLink from './SmoothScrollLink'

const FooterMenu = () => {
  return (
    <div className='text-white text-end flex flex-col justify-center items-end pr-3'>
      <h3 className='underline'>Menú</h3>
      <ul>
        <li className='hover:text-amethyst-600'>
          <SmoothScrollLink href='#about'>Nosotros</SmoothScrollLink>
        </li>
        <li className='hover:text-amethyst-600'>
          <Link href='/products'>Productos</Link>
        </li>
        <li className='hover:text-amethyst-600'>
          <SmoothScrollLink href='#contact'>Contacto</SmoothScrollLink>
        </li>
      </ul>
    </div>
  )
}

export default FooterMenu
