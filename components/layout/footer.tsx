import Link from 'next/link';

export function Footer() {
  return (
    <footer className='mt-12 border-t border-white/10 p-6 text-xs text-muted'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <p>Fantasy esports for entertainment and school project demo.</p>
        <div className='flex gap-3'>
          <Link href='/help'>Help</Link><Link href='/legal/terms'>Terms</Link><Link href='/legal/privacy'>Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
