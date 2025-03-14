import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ArrowLongRightIcon, LogoIcon } from './icon'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

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
    <div className="space-y-20">
      <Header />
      <Feature />
    </div>
  )
}

const Header = () => (
  <div className="space-y-7">
    <div className="space-y-3">
      <Badge>
        <deploymentEngine.badge.icon className="!size-3.5 text-white" />
        <span className="text-zinc-300">{deploymentEngine.badge.text}</span>
      </Badge>
      <h2 className="text-[44px] text-white">{deploymentEngine.name}</h2>
    </div>
    <div className="space-y-6">
      <p className="max-w-3xl text-lg text-zinc-300">
        {deploymentEngine.description}
      </p>
      <Button variant={'secondary'}>
        <span>{deploymentEngine.button.text}</span>
        <deploymentEngine.button.icon />
      </Button>
    </div>
  </div>
)

const Feature = () => (
  <div className="grid grid-cols-3 gap-6">
    {deploymentEngine.features.map((feature) => (
      <div
        key={feature.title}
        className={cn(
          'flex w-full flex-col gap-10 rounded-2xl border border-zinc-700 bg-neutral-800 p-10',
        )}
      >
        <div className="space-y-3">
          <p className="text-xl text-white">{feature.title}</p>
          <p className="mx-auto max-w-md text-neutral-400">{feature.content}</p>
        </div>
        <div className="relative aspect-video h-[200px]">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    ))}
  </div>
)
