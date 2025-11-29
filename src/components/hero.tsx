'use client'

import { compatibleWith } from '@/data/compatible'
import { motion, stagger } from 'motion/react'
import Image from 'next/image'
import { ArrowLongRightIcon, GithubIcon } from './icon'
import { Button } from './ui/button'
import { WordRevealText } from './word-reveal-text'

export const Hero = () => {
  return (
    <section className="bg-white py-32 max-lg:px-4">
      <div className="container mx-auto grid gap-20 lg:grid-cols-2">
        <div className="space-y-14 self-center lg:space-y-32">
          <div className="space-y-7">
            <WordRevealText className="text-[44px] leading-tight" as="h1">
              The application platform for Kubernetes
            </WordRevealText>
            <WordRevealText className="text-lg text-zinc-600" as="p">
              Deploy, manage and troubleshoot cloud-native applications at scale
              without overwhelming your engineers with the complexity of
              Kubernetes.
            </WordRevealText>
            <HeroCta />
          </div>
          <HeroCompatibleWith />
        </div>
        <motion.div
          className="relative aspect-square size-full max-lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <Image src={'/hero.png'} alt="hero" fill className="object-contain" />
        </motion.div>
      </div>
    </section>
  )
}

const HeroCta = () => (
  <motion.div
    className="inline-flex items-center gap-3"
    variants={{
      initial: {},
      animate: {},
    }}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    transition={{
      ease: 'easeInOut',
      delayChildren: stagger(0.3),
    }}
  >
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
    >
      <Button>
        <span>Documentation</span>
        <ArrowLongRightIcon />
      </Button>
    </motion.div>
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
    >
      <Button variant={'outline'}>
        <GithubIcon />
        <span>Get Started</span>
      </Button>
    </motion.div>
  </motion.div>
)

const HeroCompatibleWith = () => (
  <div className="space-y-3">
    <WordRevealText as={'p'} className="text-sm text-zinc-600">
      Compatible with
    </WordRevealText>
    <motion.div
      className="flex flex-wrap items-center gap-2"
      variants={{ initial: {}, animate: {} }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delayChildren: stagger(0.2),
      }}
    >
      {compatibleWith.map((item) => (
        <motion.div
          key={item.alt}
          className="[&>svg]:size-text-red-400 rounded-full border border-gray-200 px-4 py-2"
          variants={{
            initial: {
              opacity: 0,
              y: 20,
            },
            animate: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <item.logo />
          <span className="sr-only">{item.alt}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
)
