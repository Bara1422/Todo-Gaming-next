'use client'

import Link from 'next/link'
import React from 'react'

const SmoothScrollLink = ({ href, children, ...props }) => {
  const hrefwonumeral = href.replace('#', '')
  const handleClick = (e) => {
    e.preventDefault()
    const element = document.getElementById(hrefwonumeral)
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}

export default SmoothScrollLink
