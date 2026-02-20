import { describe, expect, it } from 'vitest';
import { calculateFantasyPoints } from '@/lib/utils/scoring';

describe('calculateFantasyPoints', () => {
  it('calculates with bonuses', () => {
    const pts = calculateFantasyPoints({kills:20,assists:5,deaths:12,plants:1,defuses:0,clutches:1,multikills:3,role:'Duelist',won:true,streak:3});
    expect(pts).toBe(50);
  });
});
