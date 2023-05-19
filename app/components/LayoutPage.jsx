import Image from 'next/image'
import React from 'react'

const LayoutPage = ({ children, img }) => {
  return (
    <div className='px-2 py-5 flex items-start justify-center  bg-fixed m-auto min-h-[inherit] relative '>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image
          src={`/${img}`}
          fill
          quality={60}
          priority
          alt='Contact Background Image'
          style={{ objectFit: 'cover' }}
        />
      </div>
      {children}
    </div>
  )
}

export default LayoutPage
