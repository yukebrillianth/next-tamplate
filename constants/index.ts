export const siteConfig = {
  name: 'Next Template',
  description:
    'A Next.js starter template with TypeScript, Tailwind CSS, and best practices.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  creator: 'Your Name',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  links: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export type NavLink = (typeof navLinks)[number];
