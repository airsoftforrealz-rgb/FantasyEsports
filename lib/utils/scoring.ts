export interface StatInput { kills:number; assists:number; deaths:number; plants:number; defuses:number; clutches:number; multikills:number; role:string; won:boolean; streak:number; }

export function calculateFantasyPoints(s: StatInput) {
  const base = s.kills*2 + s.assists*1 - s.deaths + s.plants*2 + s.defuses*3 + s.clutches*4 + s.multikills*2;
  const roleBonus = ({Duelist:3,Initiator:2,Controller:2,Sentinel:2} as Record<string, number>)[s.role] ?? 1;
  const winBonus = s.won ? 5 : 0;
  const streakBonus = Math.max(0, s.streak-1);
  return base + roleBonus + winBonus + streakBonus;
}
