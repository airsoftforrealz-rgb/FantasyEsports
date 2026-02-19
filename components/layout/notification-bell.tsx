import Link from 'next/link';

export function NotificationBell() {
  return <Link aria-label='Notifications' href='/notifications' className='rounded bg-white/10 px-2 py-1 text-xs'>🔔 3</Link>;
}
