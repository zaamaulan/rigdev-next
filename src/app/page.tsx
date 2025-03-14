import { Conversion } from '@/components/conversion'
import { DeploymentEngine } from '@/components/deployment-engine'
import { DeveloperAbstraction } from '@/components/developer-abstraction'
import { Hero } from '@/components/hero'
import { TeamBenefit } from '@/components/team-benefit'
import { Troubleshooting } from '@/components/troubleshooting'
import { ValueProposition } from '@/components/value-proposition'
import React from 'react'

const Page = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-[150px] py-[150px]">
        <ValueProposition />
        <section className="container mx-auto space-y-24 rounded-3xl bg-stone-900 px-14 py-32">
          <DeveloperAbstraction />
          <DeploymentEngine />
          <Troubleshooting />
        </section>
        <TeamBenefit />
        <Conversion />
      </div>
    </>
  )
}

export default Page
