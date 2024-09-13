import { cva, VariantProps } from 'class-variance-authority';
import { CircleAlert, CircleCheckBig, TriangleAlert } from 'lucide-react';

import { cn } from '@/lib/utils';

const inlineVariants = cva(
  'flex justify-center gap-x-2 rounded-md p-3 text-sm',
  {
    variants: {
      variant: {
        error: 'bg-destructive/30 text-red-500',
        success: 'bg-green-400/20 text-green-400',
        warning: 'bg-amber-400/25 text-amber-400',
      },
    },
  }
);

interface Props
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof inlineVariants> {
  variant: 'error' | 'success' | 'warning'; // make variant required
  message?: string;
}

export const Inline = ({ message, className, variant, ...props }: Props) => {
  if (!message) return null;

  const Tag =
    variant === 'warning'
      ? CircleAlert
      : variant === 'error'
        ? TriangleAlert
        : CircleCheckBig;

  return (
    <div className={cn(inlineVariants({ variant, className }))} {...props}>
      <Tag className="h-4 w-4 flex-shrink-0" />
      <p>{message}</p>
    </div>
  );
};

export default Inline;
