import { describe, it, expect } from 'vitest';
import { createQueryConfig, QUERY_PRESETS } from '@/lib/queryConfig';

describe('createQueryConfig', () => {
  it('returns global defaults when no overrides provided', () => {
    const config = createQueryConfig();
    expect(config.staleTime).toBe(5 * 60 * 1000);
    expect(config.gcTime).toBe(10 * 60 * 1000);
    expect(config.retry).toBe(2);
    expect(config.refetchOnWindowFocus).toBe(false);
  });

  it('allows overriding staleTime', () => {
    const config = createQueryConfig({ staleTime: 0 });
    expect(config.staleTime).toBe(0);
    expect(config.gcTime).toBe(10 * 60 * 1000); // unchanged
  });

  it('allows overriding gcTime', () => {
    const config = createQueryConfig({ gcTime: 60_000 });
    expect(config.gcTime).toBe(60_000);
  });
});

describe('QUERY_PRESETS', () => {
  it('REALTIME preset has staleTime 0', () => {
    expect(QUERY_PRESETS.REALTIME.staleTime).toBe(0);
    expect(QUERY_PRESETS.REALTIME.gcTime).toBe(60_000);
  });

  it('DEFAULT preset has 5-minute staleTime', () => {
    expect(QUERY_PRESETS.DEFAULT.staleTime).toBe(5 * 60 * 1000);
    expect(QUERY_PRESETS.DEFAULT.gcTime).toBe(10 * 60 * 1000);
  });

  it('STATIC preset has 30-minute staleTime', () => {
    expect(QUERY_PRESETS.STATIC.staleTime).toBe(30 * 60 * 1000);
    expect(QUERY_PRESETS.STATIC.gcTime).toBe(60 * 60 * 1000);
  });
});
