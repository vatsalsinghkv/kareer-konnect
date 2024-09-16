'use client';
import { useInView } from 'framer-motion';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Logo } from '@/components/shared';
import { UnstyledLink } from '@/components/shared/links';
import { UnstyledLinkProps } from '@/components/shared/links/UnstyledLink';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

const ListItem = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <UnstyledLink
            ref={ref}
            className={cn(
              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </UnstyledLink>
        </NavigationMenuLink>
      </li>
    );
  }
);

function Menu() {
  return (
    <NavigationMenu className="hidden md:ml-auto lg:flex">
      <NavigationMenuList>
        {nav_links.map((link) => {
          if (!link?.heroTitle && link.links) {
            return (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {link.links.map(({ title, href, description }) => (
                      <ListItem key={title} title={title} href={href}>
                        {description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          if (link.heroTitle && link.links) {
            return (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                          href={link.href}
                        >
                          <Logo className="mb-2 mt-4" />
                          <p className="text-muted-foreground text-sm leading-tight">
                            Smart proposal builder, made for Companies
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {link.links.map(({ title, href, description }) => (
                      <ListItem key={title} title={title} href={href}>
                        {description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={link.href}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const Navbar = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const isNotInView = useInView(ref, { once: false, amount: 0.9 });

  const LoginSignUpAndSignOutBtn = ({ isSidebar }: { isSidebar?: boolean }) => {
    return (
      <>
        <Button
          variant="ghost"
          asChild
          className={cn('shrink-0', isSidebar && 'w-full')}
        >
          <UnstyledLink href="/auth/login">Login</UnstyledLink>
        </Button>
        <Button asChild className={cn('shrink-0', isSidebar && 'w-full')}>
          <UnstyledLink href="/auth/register">Get Started</UnstyledLink>
        </Button>
      </>
    );
  };

  return (
    <Sheet>
      <div
        className={cn('fixed z-30 w-full ')}
        style={{ padding: isNotInView ? '0.6rem 0' : '.5rem 0' }}
      >
        <header
          className="layout flex h-full flex-col items-center justify-center rounded-2xl border backdrop-blur"
          style={{
            padding: isNotInView ? '0' : '.7rem',
            backgroundColor: isNotInView
              ? 'transparent'
              : 'hsl(var(--background) / 0.8)',
            backdropFilter: isNotInView ? '' : 'blur(1rem)',
            borderWidth: isNotInView ? '0px' : '1px',
            maxWidth: isNotInView ? '80rem' : '70rem',
            transition: 'all 0.3s ease',
          }}
        >
          <div className={cn('flex w-full items-center justify-between')}>
            <div className="flex-shrink-0">
              <Logo />
            </div>

            <Menu />

            <div className="ml-auto hidden gap-3 sm:flex">
              <LoginSignUpAndSignOutBtn />
            </div>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="ml-3 flex lg:hidden"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
          </div>
        </header>
      </div>
      <SheetContent className="flex flex-col overflow-y-auto">
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <Accordion collapsible type="single">
          {nav_links.map((link) => {
            if (link.links) {
              return (
                <AccordionItem value={link.title} key={link.href}>
                  <AccordionTrigger>{link.title}</AccordionTrigger>
                  <AccordionContent className="p-0">
                    {!link?.heroTitle && link.links && (
                      <ul className="w-full gap-3">
                        {link.links.map(({ title, href, description }) => (
                          <UnstyledLink
                            href={href}
                            className={cn(
                              'hover:bg-accent hover:text-primary focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors'
                            )}
                            key={title}
                          >
                            <div className="text-sm font-medium leading-none">
                              {title}
                            </div>
                            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                              {description}
                            </p>
                          </UnstyledLink>
                        ))}
                      </ul>
                    )}

                    {link.heroTitle && link.links && (
                      <ul className="grid w-full gap-3">
                        <li className="row-span-3">
                          <a
                            className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                            href={link.href}
                          >
                            <Logo className="mb-2 mt-4" />
                          </a>
                        </li>
                        {link.links.map(({ title, href, description }) => (
                          <UnstyledLink
                            href={href}
                            className={cn(
                              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors'
                            )}
                            key={title}
                          >
                            <div className="text-sm font-medium leading-none">
                              {title}
                            </div>
                            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                              {description}
                            </p>
                          </UnstyledLink>
                        ))}
                      </ul>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            }

            return (
              <UnstyledLink
                className="h3 flex flex-1 items-center justify-between border-b py-4 font-medium transition-all hover:underline"
                href={link.href}
                key={link.title}
              >
                {link.title}
              </UnstyledLink>
            );
          })}
        </Accordion>

        <SheetFooter className="mt-auto flex gap-2 sm:flex-col sm:space-x-0">
          <LoginSignUpAndSignOutBtn isSidebar />
        </SheetFooter>
      </SheetContent>
      <div ref={ref} className="absolute inset-0 -z-10"></div>
    </Sheet>
  );
};

export default Navbar;

type IComponent = { title: string; href: string; description: string };

type INavLinks = {
  title: string;
} & (
  | // If there is hero box in links
  (| {
          heroTitle: string;
          href: string;
          links: IComponent[];
        }
      // Just links
      | {
          heroTitle?: never;
          href?: never;
          links: IComponent[];
        }
    )
  // Nothing
  | {
      heroTitle?: never;
      href: string;
      links?: never;
    }
);

const nav_links: INavLinks[] = [
  {
    title: 'Job Listing',
    links: [
      {
        title: 'Private Sector Jobs',
        href: '/solutions/career-counseling',
        description:
          'Access professional counseling and career guidance services tailored to help graduates succeed.',
      },
      {
        title: 'Government Sector Jobs',
        href: '/solutions/resume-building',
        description:
          'Use our tools to create a professional resume that stands out to employers.',
      },
      {
        title: 'Overseas Opportunities',
        href: '/solutions/overseas-opportunities',
        description:
          'Discover and apply for international job opportunities in various sectors.',
      },
      {
        title: 'Advanced Search',
        href: '/solutions/job-application-support',
        description:
          'Get support and resources to streamline the job application process from start to finish.',
      },
    ],
  },
  {
    title: 'Counselling & Guidance',
    links: [
      {
        title: 'Career Guidance',
        href: '/solutions/career-counseling',
        description:
          'Access professional counseling and career guidance services tailored to help graduates succeed.',
      },
      {
        title: 'Resume Building',
        href: '/solutions/resume-building',
        description:
          'Use our tools to create a professional resume that stands out to employers.',
      },
      {
        title: 'Interview Preparation',
        href: '/solutions/overseas-opportunities',
        description:
          'Discover and apply for international job opportunities in various sectors.',
      },
      {
        title: 'Career Advice Articles',
        href: '/solutions/job-application-support',
        description:
          'Get support and resources to streamline the job application process from start to finish.',
      },
    ],
  },
  {
    title: 'Internships & Training',
    links: [
      {
        title: 'Internships',
        href: '/solutions/career-counseling',
        description:
          'Access professional counseling and career guidance services tailored to help graduates succeed.',
      },
      {
        title: 'Resume Building',
        href: '/solutions/resume-building',
        description:
          'Use our tools to create a professional resume that stands out to employers.',
      },
      {
        title: 'Industrial Training',
        href: '/solutions/overseas-opportunities',
        description:
          'Discover and apply for international job opportunities in various sectors.',
      },
    ],
  },
  {
    title: 'Skill Dev & Resources',
    links: [
      {
        title: 'Course Recommendations',
        href: '/solutions/career-counseling',
        description:
          'Access professional counseling and career guidance services tailored to help graduates succeed.',
      },
      {
        title: 'Job Market Insights',
        href: '/solutions/resume-building',
        description:
          'Use our tools to create a professional resume that stands out to employers.',
      },
      {
        title: 'Other Courses',
        href: '/solutions/overseas-opportunities',
        description:
          'Discover and apply for international job opportunities in various sectors.',
      },
      {
        title: 'Training',
        href: '/solutions/job-application-support',
        description:
          'Get support and resources to streamline the job application process from start to finish.',
      },
    ],
  },
];
