import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = ({
  variant = 'default',
}: {
  variant?: 'default' | 'white'
}) => {
  return (
    <Link href={'/'} className='shrink-0'>
      {variant === 'default' ? (
        <Image src={'/rigdev.svg'} alt="rigdev logo" width={108} height={26} />
      ) : (
        <Image
          src={'/rigdev-white.svg'}
          alt="rigdev logo"
          width={108}
          height={26}
        />
      )}
    </Link>
  )
}
