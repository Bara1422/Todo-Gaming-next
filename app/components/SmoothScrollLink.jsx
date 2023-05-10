'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import React from 'react'

const SmoothScrollLink = ({
  href,
  children,
  setIsOpen,

  ...props
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const hrefwonumeral = href.replace('#', '')

  const handleClick = (e) => {
    const element = document.getElementById(hrefwonumeral)
    e.preventDefault()
    if (pathname === '/') {
      setIsOpen(false)
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      setIsOpen(false)
      router.push('/')
    }
  }
  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}

export default SmoothScrollLink
