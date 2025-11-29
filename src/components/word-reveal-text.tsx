'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import React from 'react'

type WordRevealTextProps<T extends React.ElementType> = {
  children: React.ReactNode
  as: T
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>

export const WordRevealText = <T extends React.ElementType>({
  children,
  as,
  className,
  ...props
}: WordRevealTextProps<T>) => {
  if (typeof children !== 'string') {
    throw new Error('WordRevealText must be a string')
  }

  const words = children.split(' ')
  const MotionElement = motion(as)

  return (
    <MotionElement
      className={cn('relative overflow-hidden', className)}
      variants={{ initial: {}, animate: {} }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      {...props}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ height: '1lh' }}
        >
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: '100%' },
              animate: { y: '0%' },
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          >
            {word + '\u00A0'}
          </motion.span>
        </span>
      ))}
    </MotionElement>
  )
}
