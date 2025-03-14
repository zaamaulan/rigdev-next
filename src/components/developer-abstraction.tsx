import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ArrowLongRightIcon, LogoIcon } from './icon'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

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
    <section className="container mx-auto rounded-3xl bg-stone-900 px-14 py-32">
      <div className="space-y-20">
        <Header />
        <Feature />
      </div>
    </section>
  )
}

const Header = () => (
  <div className="space-y-7">
    <div className="space-y-3">
      <Badge>
        <developerAbstractions.badge.icon className="!size-3.5 text-white" />
        <span className="text-zinc-300">
          {developerAbstractions.badge.text}
        </span>
      </Badge>
      <h2 className="text-[44px] text-white">{developerAbstractions.name}</h2>
    </div>
    <div className="space-y-6">
      <p className="max-w-3xl text-lg text-zinc-300">
        {developerAbstractions.description}
      </p>
      <Button variant={'secondary'}>
        <span>{developerAbstractions.button.text}</span>
        <developerAbstractions.button.icon />
      </Button>
    </div>
  </div>
)

const Feature = () => (
  <div className="grid grid-cols-2 gap-6">
    {developerAbstractions.features.map((feature) => (
      <div
        key={feature.title}
        className={cn(
          'flex w-full flex-col gap-10 rounded-2xl border border-zinc-700 bg-neutral-800 p-10',
        )}
      >
        <div className="relative aspect-video h-[200px]">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-3 text-center">
          <p className="text-xl text-white">{feature.title}</p>
          <p className="mx-auto max-w-md text-neutral-400">{feature.content}</p>
        </div>
      </div>
    ))}
  </div>
)
