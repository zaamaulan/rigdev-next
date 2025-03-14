import Link from 'next/link'
import React from 'react'

export const Navlink = ({ links }: { links: Navlink[] }) => {
  return (
    <>
      {links.map((link) => (
        <li key={link.label} className='text-zinc-600'>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </>
  )
}
