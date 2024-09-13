import { cn } from '@/lib/utils';

import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'li'> {
  children: React.ReactNode;
  bulletClass?: React.ComponentProps<'li'>['className'];
}

export default function ListItem({
  children,
  className,
  bulletClass,
  ...props
}: Props) {
  return (
    <li className={cn('flex gap-3', className)} {...props}>
      <span
        className={cn(
          'w-1.5 mt-[9px] flex-shrink-0 h-1.5 rounded-full bg-muted-foreground',
          bulletClass
        )}
      ></span>
      <span>{children}</span>
    </li>
  );
}
