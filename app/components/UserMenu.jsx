'use client'
import Link from 'next/link'
import React, { useCallback, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import Shadow from './Shadow'

const UserMenu = () => {
  const { logout, currentUser, setHiddenMenu, hiddenMenu } = useAuth()
  const router = useRouter()

  const handleLogout = useCallback(() => {
    logout()
    setHiddenMenu(false)
    router.push('/')
  }, [logout, setHiddenMenu, router])

  useEffect(() => {
    if (!currentUser) {
      router.push('/')
    }
  }, [currentUser, router])

  const handleToggle = useCallback(() => {
    setHiddenMenu((prevState) => !prevState)
  }, [setHiddenMenu])

  return (
    <>
      {!hiddenMenu && <Shadow onClick={handleToggle} />}

      <div
        className={`flex items-start justify-center flex-col absolute top-[135%] right-0 z-40 opacity-100 border visible min-w-[250px] rounded-lg bg-white duration-300 transform ${
          !hiddenMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h5 className='border-b w-full pb-1 px-4 py-5 text-black text-center'>
          Hola {currentUser.name}
        </h5>
        <div className='w-full flex flex-col'>
          <Link
            href='my-orders'
            onClick={handleToggle}
            className='transition-all px-4 py-5 text-[#7d7d7d] text-sm cursor-pointer hover:bg-amethyst-100/70 hover:text-amethyst-600'
          >
            <span>Mis ordenes</span>
          </Link>
          <button
            onClick={handleLogout}
            aria-label='Cerrar Sesión'
            className='transition-all text-start px-4 py-5 text-[#7d7d7d] text-sm cursor-pointer hover:bg-amethyst-100/70 hover:text-amethyst-600'
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  )
}

export default UserMenu
