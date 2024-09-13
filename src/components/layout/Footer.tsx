import { Facebook, Instagram, LucideIcon, Twitter } from 'lucide-react';

import { IconLinkType, LinkType } from '@/lib/types';

import Wrapper from '@/components/layout/Wrapper';
import { Logo } from '@/components/shared';
import { NavLink, UnstyledLink } from '@/components/shared/links';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <Wrapper as="footer" className="bg-background text-foreground">
      <div className="relative lg:flex lg:items-center lg:justify-between">
        <Logo className="mx-auto lg:mx-0" />

        <ul className="flex items-center justify-center gap-2 mt-8 sm:mt-12 sm:space-x-4 lg:mt-0">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </ul>

        {socialLinks.length > 0 && (
          <ul className="flex items-center justify-center mt-8 space-x-3 sm:mt-12 lg:justify-end lg:mt-0">
            {socialLinks.map((link, i) => {
              const Icon = link.icon as LucideIcon;
              return (
                <li key={`${link.href}-${i}`}>
                  <Button variant="ghost" size="icon" asChild className="">
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

      <hr className="mt-10 border-border" />

      <div className="mt-10 md:flex md:items-center md:justify-between text-muted-foreground">
        <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-4 md:order-2 md:justify-end">
          {supportLinks.map(({ href, name }) => (
            <NavLink href={href} key={href}>
              {name}
            </NavLink>
          ))}
        </ul>

        <p className="mt-8 text-sm text-center md:text-left md:mt-0 md:order-1">
          © Copyright {new Date().getFullYear()}, All Rights Reserved
        </p>
      </div>
    </Wrapper>
  );
}

const links: LinkType[] = [
  { name: 'FAQs', href: '/#faqs' },
  { name: 'Contact', href: '/contact' },
  { name: 'Career Guidance', href: '/career-guidance' },
  { name: 'Internships', href: '/internships' },
];

const supportLinks: LinkType[] = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
];

const socialLinks: IconLinkType[] = [
  {
    href: 'https://twitter.com/',
    icon: Twitter,
  },
  {
    href: 'https://www.facebook.com/',
    icon: Facebook,
  },
  {
    href: 'https://www.instagram.com/',
    icon: Instagram,
  },
];
