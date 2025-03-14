import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ArrowLongRightIcon, LogoIcon } from './icon'
import { Badge } from './ui/badge'
import { Button, buttonVariants } from './ui/button'

const troubleshooting = {
  name: 'Troubleshooting made simple',
  description:
    'Deploy and manage any application on any cloud provider with Rig and Kubernetes. Rig enables developers to deploy well-configured applications in Kubernetes without.',
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
      image: '/troubleshooting/cluster-insights.svg',
      title: 'Cluster insights',
      content: 'High-level access to cluster health, features and issues.',
      colspan: 2,
    },
    {
      image: '/troubleshooting/instances.svg',
      title: 'Instances',
      content: 'Instance status and dependencies in one aggregated view.',
      colspan: 1,
    },
    {
      image: '/troubleshooting/logging.svg',
      title: 'Logging',
      content:
        'Stream combined Capsule logs across instances, directly from the dashboard.',
      colspan: 1,
    },
    {
      image: '/troubleshooting/health-checks.svg',
      title: 'Health Checks',
      content: 'Easily configure Liveness and Ready probes for Capsules.',
      colspan: 2,
    },
  ],
} as const

export const Troubleshooting = () => {
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
        <troubleshooting.badge.icon className="!size-3.5 text-white" />
        <span className="text-zinc-300">{troubleshooting.badge.text}</span>
      </Badge>
      <h2 className="text-[44px] text-white">{troubleshooting.name}</h2>
    </div>
    <div className="space-y-6">
      <p className="max-w-3xl text-lg text-zinc-300">
        {troubleshooting.description}
      </p>
      <Button variant={'secondary'}>
        <span>{troubleshooting.button.text}</span>
        <troubleshooting.button.icon />
      </Button>
    </div>
  </div>
)

const Feature = () => (
  <div className="grid grid-cols-4 gap-6">
    {troubleshooting.features.map((feature) => (
      <div
        key={feature.title}
        className={cn(
          'flex w-full flex-col gap-5 rounded-2xl border border-zinc-700 bg-neutral-800 p-10',
        )}
      >
        <div
          className={cn(
            '!size-[60px] border border-zinc-700 !bg-zinc-800',
            buttonVariants({ size: 'icon' }),
          )}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <div className="space-y-3">
          <p className="text-xl text-white">{feature.title}</p>
          <p className="mx-auto max-w-md text-neutral-400">{feature.content}</p>
        </div>
      </div>
    ))}
  </div>
)
