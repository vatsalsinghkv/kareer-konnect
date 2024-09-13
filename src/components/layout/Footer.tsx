import { LucideIcon } from 'lucide-react';

import { IconLinkType, LinkType } from '@/lib/types';
import { cn } from '@/lib/utils';

import Wrapper from '@/components/layout/Wrapper';
import { Logo } from '@/components/shared';
import { NavLink, UnstyledLink } from '@/components/shared/links';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <Wrapper as='footer' className='dark bg-background text-foreground'>
      <div className='md:flex md:items-start md:justify-between'>
        <h5 className={cn('max-w-lg h3')}>
          Feel free to contact us{' '}
          <UnstyledLink
            className='underline hover:text-primary focus-visible:text-primary transition-all'
            href='/contact'
          >
            here
          </UnstyledLink>
          <br />
          if you have any questions!
        </h5>
      </div>

      <div className='relative lg:flex lg:items-center lg:justify-between mt-14 lg:mt-24'>
        <Logo className='mx-auto lg:mx-0' />

        <ul className='flex items-center justify-center gap-2 mt-8 sm:mt-12 sm:space-x-16 lg:mt-0'>
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </ul>

        {socialLinks.length > 0 && (
          <ul className='flex items-center justify-center mt-8 space-x-3 sm:mt-12 lg:justify-end lg:mt-0'>
            {socialLinks.map((link, i) => {
              const Icon = link.icon as LucideIcon;
              return (
                <li key={`${link.href}-${i}`}>
                  <Button variant='ghost' size='icon' asChild className=''>
                    <UnstyledLink href={link.href}>
                      <Icon />
                    </UnstyledLink>
                  </Button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <hr className='mt-10 border-border' />

      <div className='mt-10 md:flex md:items-center md:justify-between text-muted-foreground'>
        <ul className='flex flex-wrap items-center justify-center gap-2 md:gap-4 md:order-2 md:justify-end'>
          {supportLinks.map(({ href, name }) => (
            <NavLink href={href} key={href}>
              {name}
            </NavLink>
          ))}
        </ul>

        <p className='mt-8 text-sm text-center md:text-left md:mt-0 md:order-1'>
          © Copyright {new Date().getFullYear()}, All Rights Reserved
        </p>
      </div>
      <p className='mt-4 text-sm text-center md:text-left text-muted-foreground'>
        Developed & Designed by{' '}
        <UnstyledLink
          className='underline hover:text-primary focus-visible:text-primary transition-all'
          href='https://vatsalsinghkv.vercel.app/'
        >
          Vatsal Singh
        </UnstyledLink>
      </p>
    </Wrapper>
  );
}

const links: LinkType[] = [
  { name: 'FAQs', href: '/#faqs' },
  { name: 'Product', href: '/product' },
  { name: 'Contact', href: '/contact' },
];

const supportLinks: LinkType[] = [
  { name: 'shipping', href: '/shipping' },
  { name: 'privacy policy', href: '/privacy-policy' },
  { name: 'refund & return policy', href: '/refund-policy' },
  { name: 'terms of service', href: '/terms' },
];

const socialLinks: IconLinkType[] = [
  /* {
    href: 'https://linkedin.com/company/leadsintegra',
    icon: Linkedin,
  }, */
];
