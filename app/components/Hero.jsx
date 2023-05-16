import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=' w-full min-h-[70vh] relative'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image
          src='/Hero.jpg'
          alt='Contact Background Image'
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className='text-white md:text-5xl text-4xl flex flex-col justify-end items-center h-[70vh] outline-text pb-2 gap-1 z-10'>
        <h2 className='z-10 text-center'>LOS MEJORES COMPONENTES</h2>
        <p className='z-10 text-center md:text-4xl text-3xl'>AL MEJOR PRECIO</p>
      </div>
    </div>
  )
}

export default Hero
