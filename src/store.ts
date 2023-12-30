import { create } from 'zustand';

type Store = {
  theme: string
  toggleTheme: () => void
}

export const useAppStore = create<Store>((set) => ({
  theme: 'dark',
  toggleTheme: () => {
    set((state) => ({theme: state.theme === 'dark' ? 'light' : 'dark'}))
  }
}))