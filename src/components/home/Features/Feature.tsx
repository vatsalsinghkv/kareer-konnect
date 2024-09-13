import { FeatureType } from '@/lib/types';
import { cn } from '@/lib/utils';

type Props = React.ComponentPropsWithoutRef<'div'> & FeatureType;

export default function Feature({
  name,
  description,
  icon: Icon,
  ...props
}: Props) {
  return (
    <li className={cn('flex gap-6 items-start', { ...props })}>
      <Icon className="text-primary mt-0.5 h-6 w-6 flex-shrink-0" />

      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="mt-3 text-sm font-normal text-muted-foreground">
          {description}
        </p>
      </div>
    </li>
  );
}
