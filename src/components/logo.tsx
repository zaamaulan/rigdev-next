import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={'/rigdev.svg'} alt="rigdev logo" width={108} height={26} />
    </Link>
  )
}
