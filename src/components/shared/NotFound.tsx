import Image from 'next/image';

import { LinkType } from '@/lib/types';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import { UnstyledLink } from './links';

interface Props {
  title?: string;
  description?: string;
  link?: LinkType;
  size?: 'sm' | 'lg';
  className?: string;
}

export default function NotFound({
  title = 'Something went wrong!',
  description,
  size = 'lg',
  link,
  className = '',
}: Props) {
  return (
    <div className={cn('w-full max-w-lg text-center', className)}>
      <Image
        src='/images/404.svg'
        alt='not found'
        priority
        className='mx-auto aspect-square w-full'
        height={200}
        width={100}
      />
      <div className='space-y-3 -mt-5'>
        <h2 className={cn(size === 'lg' ? 'h2' : 'h3', 'font-bold')}>
          {title}
        </h2>
        <p>{description}</p>
        {link && (
          <Button size='sm'>
            <UnstyledLink href={link.href} className='capitalize font-bold'>
              {link.name}
            </UnstyledLink>
          </Button>
        )}
      </div>
    </div>
  );
}
