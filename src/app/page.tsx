import { Conversion } from '@/components/conversion'
import { DeploymentEngine } from '@/components/deployment-engine'
import { DeveloperAbstraction } from '@/components/developer-abstraction'
import { Hero } from '@/components/hero'
import { Troubleshooting } from '@/components/troubleshooting'
import { ValueProposition } from '@/components/value-proposition'
import React from 'react'

const Page = () => {
  return (
    <>
      <Hero />
      <div className='py-[150px] flex flex-col gap-[150px]'>
        <ValueProposition />
        <DeveloperAbstraction />
        <DeploymentEngine />
        <Troubleshooting />
        <Conversion />
      </div>
    </>
  )
}

export default Page
