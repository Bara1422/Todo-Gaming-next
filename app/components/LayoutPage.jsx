import React from 'react'

const LayoutPage = ({ children, img }) => {
  return (
    <div
      className='px-5 py-5 flex items-start justify-center bg-center bg-cover bg-no-repeat bg-fixed m-auto min-h-screen h-full'
      style={{ backgroundImage: `url(/${img})` }}
    >
      {children}
    </div>
  )
}

export default LayoutPage
