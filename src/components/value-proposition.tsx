import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from './ui/badge'
import Image from 'next/image'

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
    <section className="container mx-auto space-y-14">
      <div className="flex flex-col items-center space-y-2">
        <Badge variant={'secondary'} className='px-4 py-2'>Fixing K8 complexity</Badge>
        <h2 className="max-w-3xl text-center text-[42px]">
          Don’t let the complexity of Kubernetes leak into your engineering team
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  )
}

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <Card className="gap-8 border-gray-200 p-6 shadow-none">
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
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="p-0 text-zinc-600">
        <p>{feature.content}</p>
      </CardContent>
    </div>
  </Card>
)
