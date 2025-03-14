import { Aws, Azure, DigitalOcean, GoogleCloud } from '@/components/icon'

export const compitableWith = [
  {
    logo: GoogleCloud,
    alt: 'google cloud',
  },
  {
    logo: Aws,
    alt: 'aws',
  },
  {
    logo: DigitalOcean,
    alt: 'digital ocean',
  },
  {
    logo: Azure,
    alt: 'azure',
  },
] as const
