import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('rounded-full bg-white/10 px-2 py-1 text-xs', className)} {...props} />;
}
