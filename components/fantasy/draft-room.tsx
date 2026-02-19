'use client';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function DraftRoom() {
  const [pick, setPick] = useState(1);
  return (
    <Card>
      <h3 className='font-semibold'>Draft Room</h3>
      <p className='text-xs text-muted'>Snake pick #{pick} · Timer 00:45 · Queue enabled</p>
      <div className='mt-2 flex gap-2'>
        <Button onClick={() => setPick((p) => p + 1)}>Make Demo Pick</Button>
        <Button className='bg-white/10'>Mock Draft</Button>
      </div>
    </Card>
  );
}
