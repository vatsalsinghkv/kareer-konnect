import { ElementType, HtmlHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

const Wrapper = ({ as = 'section', children, className, ...props }: Props) => {
  const Tag = as;
  return (
    <Tag
      className={cn('py-10 sm:py-16 lg:py-20 xl:py-24', className)}
      {...props}
    >
      <div className='layout'>{children}</div>
    </Tag>
  );
};

export default Wrapper;
