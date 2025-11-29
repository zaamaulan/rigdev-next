import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rig.dev',
  description: 'Static site sliced from Figma Community.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-svh flex-col justify-between antialiased`}
      >
        <Navbar />
        <main className="flex-1 bg-neutral-100">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
