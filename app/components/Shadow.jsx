import React from 'react'

const Shadow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className='h-screen w-screen fixed top-0 left-0 z-40 bg-[rgba(0,0,0,0.5)]'
    />
  )
}

export default Shadow
