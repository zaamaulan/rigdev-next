'use client'

import { navlinks } from '@/data/nav'
import { Navlink } from './navlink'
import { Logo } from './logo'
import { Button } from './ui/button'
import { GithubIcon } from './icon'
import { useEffect, useRef } from 'react'

export const Navbar = () => {
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
      className="bg-background glassmorphism sticky top-0 z-50 mx-auto h-full w-fit pt-4 transition-transform ease-in-out"
    >
      <div className="container mx-auto flex items-center gap-10 rounded-2xl border border-gray-200 px-4 py-3">
        <Logo />
        <nav>
          <ul className="flex items-center gap-6 text-sm">
            <Navlink links={navlinks} />
          </ul>
        </nav>
        <Button>
          <GithubIcon variant="secondary" />
          <span className="text-sm">Support us</span>
        </Button>
      </div>
    </header>
  )
}
