import { describe, expect, it } from 'vitest';
import { projectFromLastMatches } from '@/lib/utils/projections';

describe('projectFromLastMatches', () => {
  it('returns projection and tag', () => {
    const out = projectFromLastMatches([20, 31, 24]);
    expect(out.projection).toBe(25);
    expect(out.boomBust).toBe('Bust');
  });
});
