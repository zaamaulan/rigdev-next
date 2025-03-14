import React from 'react'
import { Button } from './ui/button'
import { ArrowLongRightIcon, GithubIcon } from './icon'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="container mx-auto py-20 grid grid-cols-2 gap-20">
      <div className="space-y-7 self-center">
        <h1 className="text-[44px]">The application platform for Kubernetes</h1>
        <p className="text-lg text-zinc-600">
          Deploy, manage and troubleshoot cloud-native applications at scale
          without overwhelming your engineers with the complexity of Kubernetes.
        </p>
        <div className="inline-flex items-center gap-3">
          <Button>
            <span>Documentation</span>
            <ArrowLongRightIcon />
          </Button>
          <Button variant={'outline'}>
            <GithubIcon />
            <span>Get Started</span>
          </Button>
        </div>
      </div>
      <div className="relative aspect-square size-full">
        <Image src={'/hero.png'} alt="hero" fill className='object-contain' />
      </div>
    </section>
  )
}
