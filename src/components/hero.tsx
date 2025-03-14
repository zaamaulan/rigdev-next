import Image from 'next/image'
import { ArrowLongRightIcon, GithubIcon } from './icon'
import { Button } from './ui/button'
import { compatibleWith } from '@/data/compatible'

export const Hero = () => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto grid grid-cols-2 gap-20">
        <div className="space-y-32 self-center">
          <div className="space-y-7">
            <h1 className="text-[44px]">
              The application platform for Kubernetes
            </h1>
            <p className="text-lg text-zinc-600">
              Deploy, manage and troubleshoot cloud-native applications at scale
              without overwhelming your engineers with the complexity of
              Kubernetes.
            </p>
            <HeroCta />
          </div>
          <HeroCompatibleWith />
        </div>
        <div className="relative aspect-square size-full">
          <Image src={'/hero.png'} alt="hero" fill className="object-contain" />
        </div>
      </div>
    </section>
  )
}

const HeroCta = () => (
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
)

const HeroCompatibleWith = () => (
  <div className="space-y-3">
    <p className="text-sm text-zinc-600">Compatible with</p>
    <div className="flex items-center gap-2">
      {compatibleWith.map((item) => (
        <div
          key={item.alt}
          className="[&>svg]:size-text-red-400 rounded-full border border-gray-200 px-4 py-2"
        >
          <item.logo />
          <span className="sr-only">{item.alt}</span>
        </div>
      ))}
    </div>
  </div>
)
