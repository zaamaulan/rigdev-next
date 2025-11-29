'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ArrowLongRightIcon, LogoIcon } from './icon'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { WordRevealText } from './word-reveal-text'
import { motion, stagger } from 'motion/react'

const deploymentEngine = {
  name: 'Flexible and scalable Deployment Engine',
  description:
    'Deploy and manage any application on any cloud provider with Rig and Kubernetes. Rig enables developers to deploy well-configured applications in Kubernetes without the complexity.',
  badge: {
    icon: LogoIcon,
    text: 'Development',
  },
  icon: LogoIcon,
  button: {
    text: 'Explore documentation',
    icon: ArrowLongRightIcon,
  },
  features: [
    {
      image: '/deployment-engine/builds.png',
      title: 'Builds',
      content:
        'Immutable deployments of a new services w. automatic configurations of resources.',
    },
    {
      image: '/deployment-engine/rollbacks.png',
      title: 'Rollouts & Rollbacks',
      content:
        'Deploy and update configurations with immutability and efficient Rollbacks.',
    },
    {
      image: '/deployment-engine/integrations.png',
      title: 'Integrations',
      content:
        'Integrate seamlessly into existing cloud native deployment stacks.',
    },
  ],
} as const

export const DeploymentEngine = () => {
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
        <deploymentEngine.badge.icon className="!size-3.5 text-white" />
        <span className="text-zinc-300">{deploymentEngine.badge.text}</span>
      </Badge>
      <WordRevealText className="text-3xl text-white lg:text-[44px]" as={'h2'}>
        {deploymentEngine.name}
      </WordRevealText>
    </div>
    <div className="space-y-6">
      <WordRevealText as={'p'} className="max-w-3xl text-zinc-300 lg:text-lg">
        {deploymentEngine.description}
      </WordRevealText>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Button variant={'secondary'}>
          <span>{deploymentEngine.button.text}</span>
          <deploymentEngine.button.icon />
        </Button>
      </motion.div>
    </div>
  </div>
)

const Feature = () => (
  <motion.div
    className="grid gap-4 lg:grid-cols-3 lg:gap-6"
    variants={{ initial: {}, animate: {} }}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    transition={{
      delayChildren: stagger(0.3),
    }}
  >
    {deploymentEngine.features.map((feature) => (
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
        <div className="space-y-1 lg:space-y-3">
          <p className="text-lg text-white lg:text-xl">{feature.title}</p>
          <p className="mx-auto max-w-md text-neutral-400 max-lg:text-sm">
            {feature.content}
          </p>
        </div>
        <div className="relative aspect-video h-auto lg:h-[200px]">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    ))}
  </motion.div>
)
