import { create } from 'zustand';

interface AppState {
  demoMode: boolean;
  rosterOpen: boolean;
  userId: string;
  toggleDemoMode: () => void;
  toggleRoster: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  demoMode: true,
  rosterOpen: true,
  userId: 'demo-user-1',
  toggleDemoMode: () => set((s) => ({ demoMode: !s.demoMode })),
  toggleRoster: () => set((s) => ({ rosterOpen: !s.rosterOpen })),
}));
