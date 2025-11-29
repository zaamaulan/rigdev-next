'use client'

import React from 'react'
import { ArrowLongRightIcon } from './icon'
import { Button } from './ui/button'
import { WordRevealText } from './word-reveal-text'
import { motion } from 'motion/react'

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
    <section className="container mx-auto space-y-10 max-lg:px-4">
      <WordRevealText as={'h2'} className="text-4xl lg:text-[44px]">
        Ready to take Rig for a spin?
      </WordRevealText>
      <div className="grid divide-y rounded-xl border border-gray-200 bg-white lg:grid-cols-2 lg:divide-x">
        {conversion.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-6 p-6 lg:gap-11 lg:p-10"
          >
            <div className="space-y-2 lg:space-y-5">
              <h3 className="text-lg lg:text-2xl">{item.title}</h3>
              <p className="text-zinc-600 lg:text-xl">{item.description}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button className="w-fit">
                <span>{item.button.label}</span>
                <item.button.icon />
              </Button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
