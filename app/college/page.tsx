import { Bracket } from '@/components/college/bracket';
import { TournamentCard } from '@/components/cards/tournament-card';

export default function CollegePage(){
  return <div className='space-y-6'><h1 className='text-3xl font-bold'>College Leagues & Tournaments</h1>
  <div className='grid gap-3 md:grid-cols-3'>{['North Conference','South Conference','Campus Open'].map((n)=><TournamentCard key={n} name={n} type='College Division' />)}</div>
  <Bracket rounds={[["Uni 1 vs Uni 2","Uni 3 vs Uni 4"],["Winner A vs Winner B"],["Grand Final"]]} />
  </div>
}
