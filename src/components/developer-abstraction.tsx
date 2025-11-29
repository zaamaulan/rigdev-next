'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ArrowLongRightIcon, LogoIcon } from './icon'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { WordRevealText } from './word-reveal-text'
import { motion, stagger } from 'motion/react'

const developerAbstractions = {
  name: 'Developer-Friendly Kubernetes Abstractions',
  description:
    'Deploy and scale applications without battling the intricacies of K8s and spending valuable time configuring low-level K8s resources repeatedly.',
  badge: {
    icon: LogoIcon,
    text: 'Explore documentation',
  },
  icon: LogoIcon,
  button: {
    text: 'Explore documentation',
    icon: ArrowLongRightIcon,
  },
  features: [
    {
      image: '/abstraction/autoscaler.png',
      title: 'Autoscaler',
      content:
        'Seamlessly enable vertical and horizontal autoscaling with CPU & Memory limits, number of replicas & avg. CPU utilisation Targets.',
      colspan: 2,
    },
    {
      image: '/abstraction/network-interfaces.png',
      title: 'Network Interfaces',
      content:
        'Manage Private and Public Network Interfaces and let Rig automatically handle the rest.',
      colspan: 1,
    },
    {
      image: '/abstraction/environment-variables.png',
      title: 'Environment Variables',
      content:
        'Automate configuring the low-level Kubernetes resources on both container and pod-level.',
      colspan: 1,
    },
    {
      image: '/abstraction/config-files.png',
      title: 'Config Files',
      content:
        'Our platform simplifies config files and their mounting. Don’t spend time changing low-level K8s resources',
      colspan: 2,
    },
  ],
} as const

export const DeveloperAbstraction = () => {
  return (
    <div className="space-y-10 lg:space-y-20">
      <Header />
      <Feature />
    </div>
  )
}

const Header = () => (
  <div className="space-y-4 lg:space-y-7">
    <div className="space-y-3">
      <Badge>
        <developerAbstractions.badge.icon className="!size-3.5 text-white" />
        <span className="text-zinc-300">
          {developerAbstractions.badge.text}
        </span>
      </Badge>
      <WordRevealText as={'h2'} className="text-3xl text-white lg:text-[44px]">
        {developerAbstractions.name}
      </WordRevealText>
    </div>
    <div className="space-y-6">
      <WordRevealText as={'p'} className="max-w-3xl text-zinc-300 lg:text-lg">
        {developerAbstractions.description}
      </WordRevealText>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Button variant={'secondary'}>
          <span>{developerAbstractions.button.text}</span>
          <developerAbstractions.button.icon />
        </Button>
      </motion.div>
    </div>
  </div>
)

const Feature = () => (
  <motion.div
    className="grid gap-4 lg:grid-cols-2 lg:gap-6"
    variants={{ initial: {}, animate: {} }}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    transition={{
      delayChildren: stagger(0.3),
    }}
  >
    {developerAbstractions.features.map((feature) => (
      <motion.div
        key={feature.title}
        className={cn(
          'flex w-full flex-col gap-10 rounded-2xl border border-zinc-700 bg-neutral-800 p-6 lg:p-10',
        )}
        variants={{
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative aspect-video h-auto lg:h-[200px]">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-1 text-center lg:space-y-3">
          <p className="text-lg text-white lg:text-xl">{feature.title}</p>
          <p className="mx-auto max-w-md text-neutral-400 max-lg:text-sm">
            {feature.content}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
)
