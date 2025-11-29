'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navlinks } from '@/data/nav'
import { useEffect, useRef, useState } from 'react'
import { Menu } from './icon'
import { Logo } from './logo'
import { Navlink } from './navlink'
import { Button } from './ui/button'
import Image from 'next/image'

export const Navbar = () => {
  const [sheetOpen, setSheetOpen] = useState(false)
  const prevScroll = useRef(0)
  const navbarRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > prevScroll.current && currentScroll > 60) {
        navbarRef.current?.classList.add('-translate-y-full')
      } else {
        navbarRef.current?.classList.remove('-translate-y-full')
      }
      prevScroll.current = currentScroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={navbarRef}
      className="fixed z-50 lg:pt-4 transition-transform ease-in-out max-lg:px-4 lg:left-1/2 lg:-translate-x-1/2 max-lg:inset-x-0 bg-background"
    >
      <div className="_glassmorphism  container mx-auto flex w-fit items-center gap-10 rounded-2xl border border-gray-200 px-4 py-3 max-lg:hidden">
        <Logo />
        <nav>
          <ul className="flex items-center gap-6 text-sm">
            <Navlink links={navlinks} />
          </ul>
        </nav>
        {/* <Button>
          <GithubIcon variant="secondary" />
          <span className="text-sm">Support us</span>
        </Button> */}
      </div>
      <div className="flex items-center gap-4 lg:hidden py-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button size={'icon'} variant={'ghost'} className="[&>svg]:!size-6">
              <Menu />
              <div className="sr-only">Menu</div>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Image
                src={'/rigdev.svg'}
                alt="rigdev logo"
                width={108}
                height={26}
              />
              <SheetTitle className="hidden" aria-hidden />
              <SheetDescription className="hidden" aria-hidden />
            </SheetHeader>
            <nav className='px-4'>
              <ul className="flex flex-col gap-6 text-sm">
                <Navlink links={navlinks} />
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
        <Logo />
      </div>
    </header>
  )
}
