'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { motion, stagger } from 'motion/react'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { WordRevealText } from './word-reveal-text'

const features: Feature[] = [
  {
    image: '/feature/abstract-away-k8s-primitives.png',
    title: 'Abstract Away K8s Primitives',
    content:
      'Deploy, manage and debug applications with end-to-end ownership without experiencing bottlenecks or battling Kubernetes hurdles.',
  },
  {
    image: '/feature/proactively-troubleshoot.png',
    title: 'Proactively Troubleshoot',
    content:
      'Identify availability issues, misconfigurations, lack of resources, K8s anomalies and failed deploys w. feedback and health checks.',
  },
  {
    image: '/feature/developer-tools.png',
    title: 'Developer Tools',
    content:
      'Robust tooling that encompass a CLI, an extensive developer-interfaces and cloud-native CI/CD integrations.',
  },
]

export const ValueProposition = () => {
  return (
    <section className="container mx-auto space-y-14 max-lg:px-4">
      <div className="flex flex-col items-center space-y-2">
        <Badge variant={'secondary'} className="px-4 py-2">
          Fixing K8 complexity
        </Badge>
        <WordRevealText
          as={'h2'}
          className="max-w-3xl text-center text-4xl lg:text-[44px]"
        >
          Don’t let the complexity of Kubernetes leak into your engineering team
        </WordRevealText>
      </div>
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
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={{
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <FeatureCard feature={feature} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <Card className="gap-4 border-gray-200 p-6 shadow-none lg:gap-8">
    <div className="relative aspect-video">
      <Image
        src={feature.image}
        alt={feature.title}
        fill
        className="rounded-lg bg-center object-cover"
      />
    </div>
    <div className="flex flex-col gap-6">
      <CardHeader className="p-0">
        <CardTitle>{feature.title}</CardTitle>
        <CardDescription className="text-zinc-600">
          {feature.content}
        </CardDescription>
      </CardHeader>
    </div>
  </Card>
)
