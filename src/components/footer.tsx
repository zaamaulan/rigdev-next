import Image from 'next/image'
import {
  GitHub,
  GithubIcon,
  LinkedIn,
  SlackIcon,
  SlackWhite,
  XformerlyTwitter,
} from './icon'
import { Logo } from './logo'
import { Button } from './ui/button'
import { Input } from './ui/input'

const socials = [
  {
    icon: GitHub,
    label: 'Github',
  },
  {
    icon: SlackWhite,
    label: 'Slack',
  },
  {
    icon: LinkedIn,
    label: 'LinkedIn',
  },
  {
    icon: XformerlyTwitter,
    label: 'X',
  },
]

export const Footer = () => {
  return (
    <footer className="bg-stone-900 py-20 max-lg:px-4">
      <div className="container mx-auto space-y-8">
        <div className="flex items-center justify-between rounded-3xl bg-neutral-800 p-10">
          <div className="space-y-6">
            <p className="text-4xl text-white lg:text-[44px]">
              Join our Community
            </p>
            <div className="inline-flex flex-wrap items-center gap-3">
              <Button variant={'secondary'}>
                <span>Join our Slack</span>
                <SlackIcon />
              </Button>
              <Button>
                <GithubIcon variant="secondary" />
                <span>Star us on Github</span>
              </Button>
            </div>
          </div>
          <Image
            src={'/community.png'}
            alt="community"
            width={295}
            height={252}
            className="max-lg:hidden"
          />
        </div>
        <div className="flex justify-between gap-8 max-lg:flex-col-reverse lg:items-center">
          <div className="flex flex-col gap-4">
            <Logo variant="white" />
            <div className="inline-flex items-center gap-2">
              {socials.map((social) => (
                <a key={social.label} href="#">
                  <Button
                    size={'icon'}
                    variant={'outline'}
                    className="border-neutral-800 bg-transparent hover:bg-[unset]"
                  >
                    <social.icon />
                  </Button>
                </a>
              ))}
            </div>
          </div>
          <NewsLetterForm />
        </div>
      </div>
    </footer>
  )
}

const NewsLetterForm = () => (
  <form
    action="#"
    method="POST"
    className="flex flex-col gap-4 rounded-3xl bg-neutral-800 p-6"
  >
    <p className="text-sm text-neutral-400">
      Sign up for our newsletter and join the growing Rig.dev community.
    </p>
    <div className="inline-grid gap-2 lg:grid-cols-3">
      <Input
        type="text"
        placeholder="First Name"
        className="h-[44px] border-neutral-700 text-sm"
      />
      <Input
        type="email"
        placeholder="Email"
        className="h-[44px] border-neutral-700 text-sm"
      />
      <Button className="h-[44px]" variant={'secondary'}>
        Subscribe
      </Button>
    </div>
  </form>
)
