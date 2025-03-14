import React from 'react'
import { ArrowLongRightIcon } from './icon'
import { Button } from './ui/button'

const conversion = [
  {
    title: 'Schedule a call',
    description: 'We are gladly helping companies to get started.',
    button: {
      label: 'Schedule a Call',
      icon: ArrowLongRightIcon,
    },
  },
  {
    title: 'Try it out yourself',
    description: 'We have made it as easy as possible to try Rig.',
    button: {
      label: 'Documentation',
      icon: ArrowLongRightIcon,
    },
  },
]

export const Conversion = () => {
  return (
    <section className="container mx-auto space-y-10">
      <h2 className="text-[42px]">Ready to take Rig for a spin?</h2>
      <div className="grid grid-cols-2 divide-x rounded-xl border border-gray-200 bg-white">
        {conversion.map((item) => (
          <div key={item.title} className="flex flex-col gap-11 p-10">
            <div className="space-y-5">
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-xl text-zinc-600">{item.description}</p>
            </div>
            <Button className='w-fit'>
              <span>{item.button.label}</span>
              <item.button.icon />
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
