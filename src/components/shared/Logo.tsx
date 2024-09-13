import { Workflow } from 'lucide-react';

import { cn } from '@/lib/utils';

import { UnstyledLink } from './links';
import { UnstyledLinkProps } from './links/UnstyledLink';

interface Props extends Omit<UnstyledLinkProps, 'href' | 'children'> {
  name?: string;
  size?: number;
  href?: string;
  hideText?: boolean;
}

const Logo = ({
  className,
  name = 'KareerKonnect',
  href = '/',
  size = 20,
  hideText = false,
  ...rest
}: Props) => {
  return (
    <UnstyledLink
      href={href}
      className={cn(
        'group flex max-w-max items-center gap-2 rounded outline-none',
        'focus-visible:ring-ring text-foreground ring-offset-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'hover:!text-gradient-primary focus-visible:text-gradient-primary text-xl font-medium capitalize italic',
        className
      )}
      {...rest}
    >
      <Workflow
        size={size}
        className={cn(
          'shrink-0',
          hideText
            ? 'group-hover:text-primary focus-visible:text-primary'
            : 'focus-visible:text-primary group-hover:text-primary'
        )}
      />
      {!hideText ? name : ''}
    </UnstyledLink>
  );
};

export default Logo;
