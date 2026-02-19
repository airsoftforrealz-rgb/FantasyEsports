'use client';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

export interface LeaderRow { rank: number; name: string; points: number; trend: string; updatedAt: string; }

export function LeaderboardTable({ rows }: { rows: LeaderRow[] }) {
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({ count: rows.length, getScrollElement: () => parentRef.current, estimateSize: () => 44 });
  return (
    <div ref={parentRef} className='h-[420px] overflow-auto rounded border border-white/10'>
      <div style={{ height: `${virtualizer.getTotalSize()}px`, position: 'relative' }}>
        {virtualizer.getVirtualItems().map((v) => {
          const row = rows[v.index];
          return <div key={v.key} className='absolute left-0 top-0 flex w-full items-center justify-between border-b border-white/10 px-3 text-sm' style={{height: 44, transform: `translateY(${v.start}px)`}}><span>#{row.rank} {row.name}</span><span>{row.points} {row.trend} · {row.updatedAt}</span></div>;
        })}
      </div>
    </div>
  );
}
