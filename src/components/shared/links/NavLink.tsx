import { cn } from '@/lib/utils';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

export interface NavLinkOptionsType {
  underline?: boolean;
}
interface NavLinkProps extends UnstyledLinkProps, NavLinkOptionsType {
  childClassName?: string;
}

const NavLink = ({
  children,
  className,
  childClassName,
  href,
  underline = false,
  ...rest
}: NavLinkProps) => {
  return (
    <UnstyledLink
      href={href}
      className={cn(
        'hover:text-primary font-medium text-inherit focus:text-primary group block rounded-md px-2 py-0.5 text-sm capitalize transition-colors duration-200',
        'ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-medium disabled:pointer-events-none ',
        className
      )}
      {...rest}
    >
      <span
        className={cn(
          underline &&
            'group-hover:before:bg-primary group-focus-visible:before:bg-primary relative before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full before:duration-200',
          childClassName
        )}
      >
        {children}
      </span>
    </UnstyledLink>
  );
};

export default NavLink;
