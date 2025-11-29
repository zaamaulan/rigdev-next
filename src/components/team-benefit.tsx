import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { WordRevealText } from './word-reveal-text'

const benefits = [
  {
    tab: {
      value: 'product-teams',
      label: 'Product Teams',
    },
    content: [
      {
        title: 'Straight from code to production',
        description:
          'Identify issues, misconfigurations, lack of resources, and failed deploys, and resolve with rollbacks.',
      },
      {
        title: 'Troubleshoot blazingly fast',
        description:
          'Identify issues, misconfigurations, lack of resources, and failed deploys, and resolve with rollbacks.',
      },
      {
        title: 'Unmatched Developer Experience',
        description:
          'Provide developers with a powerful platform that fits their workflows with a robust CLI and Dashboard.',
      },
    ],
  },
  {
    tab: {
      value: 'devops',
      label: 'DevOps/Platform Teams',
    },
    content: [
      {
        title: 'Unmatched Developer Experience',
        description:
          'Provide developers with a powerful platform that fits their workflows with a robust CLI and Dashboard.',
      },
      {
        title: 'Straight from code to production',
        description:
          'Identify issues, misconfigurations, lack of resources, and failed deploys, and resolve with rollbacks.',
      },
      {
        title: 'Troubleshoot blazingly fast',
        description:
          'Identify issues, misconfigurations, lack of resources, and failed deploys, and resolve with rollbacks.',
      },
    ],
  },
  {
    tab: {
      value: 'engineering-leaders',
      label: 'Engineering Leaders',
    },
    content: [
      {
        title: 'Troubleshoot blazingly fast',
        description:
          'Identify issues, misconfigurations, lack of resources, and failed deploys, and resolve with rollbacks.',
      },
      {
        title: 'Unmatched Developer Experience',
        description:
          'Provide developers with a powerful platform that fits their workflows with a robust CLI and Dashboard.',
      },
      {
        title: 'Straight from code to production',
        description:
          'Identify issues, misconfigurations, lack of resources, and failed deploys, and resolve with rollbacks.',
      },
    ],
  },
]

export const TeamBenefit = () => {
  return (
    <section className="container mx-auto flex flex-col items-center gap-10 max-lg:px-4">
      <WordRevealText as={'h2'} className="text-center text-4xl lg:text-[44px]">
        A platform to benefit the entire team
      </WordRevealText>
      <Tabs
        defaultValue="product-teams"
        className="flex w-full flex-col items-center gap-10"
      >
        <TabsList className="h-[50px] rounded-xl bg-neutral-200 py-1 shadow-none">
          {benefits.map((benefit) => (
            <TabsTrigger
              key={benefit.tab.value}
              value={benefit.tab.value}
              className="h-[44px] rounded-lg px-[18px] text-lg data-[state=active]:shadow-none"
            >
              {benefit.tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {benefits.map((benefit) => (
          <TabsContent
            key={benefit.tab.value}
            value={benefit.tab.value}
            className="grid w-full gap-4 lg:grid-cols-3 lg:gap-6"
          >
            {benefit.content.map((content) => (
              <BenefitCard
                key={content.title}
                title={content.title}
                description={content.description}
              />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

const BenefitCard = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <Card>
    <CardHeader className="lg:space-y-5">
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription className="text-zinc-600 lg:text-base">
        {description}
      </CardDescription>
    </CardHeader>
  </Card>
)
