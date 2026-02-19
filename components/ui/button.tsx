import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn('rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50', className)} {...props} />;
}
