'use client';
import { useEffect, useState } from 'react';
import { LeaderboardTable, LeaderRow } from '@/components/leaderboard/leaderboard-table';

const base = Array.from({length:550}).map((_,i)=>({rank:i+1,name:`Manager ${i+1}`,points:1200-i,trend:i%2?'↑':'↓',updatedAt:'just now'}));

export default function LeaderboardsPage(){
  const [rows,setRows]=useState<LeaderRow[]>(base);
  useEffect(()=>{
    const es = new EventSource('/api/live/leaderboards');
    es.onmessage=(e)=>{ const {delta}=JSON.parse(e.data); setRows((r)=>r.map((x,i)=>i<20?{...x,points:x.points+delta}:x)); };
    return ()=>es.close();
  },[]);
  return <div className='space-y-4'><h1 className='text-3xl font-bold'>Leaderboards <span className='text-sm text-danger'>● LIVE</span></h1><p className='text-xs text-muted'>Tabs: Global, My Leagues, Tournaments, College · Filters: Daily/Weekly/Season/Playoffs</p><LeaderboardTable rows={rows}/></div>
}
