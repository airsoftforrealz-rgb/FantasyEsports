export function projectFromLastMatches(points: number[]) {
  if (!points.length) return { projection: 0, boomBust: 'Steady' as const };
  const projection = points.reduce((a,b)=>a+b,0)/points.length;
  const variance = Math.max(...points) - Math.min(...points);
  const boomBust = variance > 25 ? 'Boom' : variance < 10 ? 'Steady' : 'Bust';
  return { projection: Number(projection.toFixed(1)), boomBust };
}
