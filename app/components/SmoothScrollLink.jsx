'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import React from 'react'

const SmoothScrollLink = ({
  href,
  children,
  handleHiddenMenus = () => {},
  ...props
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const hrefwonumeral = href.replace('#', '')

  const handleClick = (e) => {
    const element = document.getElementById(hrefwonumeral)
    e.preventDefault()
    handleHiddenMenus()
    if (pathname === '/') {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
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
