import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <section
      id='about'
      className='text-center border-y-2 py-10 w-full p-1 bg-gray-950'
    >
      <h2 className='text-4xl'>Sobre Nosotros</h2>
      <p className='py-6 w-4/5 md:w-3/6 mx-auto text-start md:text-2xl sm:text-lg text-md '>
        Los mejores componentes para tu PC, los mejores precios del MERCADO y la
        mejor atención los encontrás
        <Link href='/products' className='text-amethyst-600'>
          {' '}
          ACÁ
        </Link>
        . Contamos con la mejor y más variada cantidad de productos con garantía
        total. También realizamos envios a todo el país con entrega prioritaria,
        para que no tengas que esperar más de lo deseado por tu producto.
      </p>
    </section>
  )
}

export default AboutUs
