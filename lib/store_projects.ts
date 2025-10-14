// lib/store.ts
import { SectionData } from './types_projects'
import { nanoid } from 'nanoid'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type BuilderState = {
  sections: SectionData[]
  addSection: (s: Omit<SectionData,'id'>) => void
  removeSection: (id: string) => void
  updateSection: (id: string, props: Record<string, any>) => void
  reorder: (from: number, to: number) => void
  setSections: (sections: SectionData[]) => void
  clear: () => void
}

export const useBuilderStore = create<BuilderState>()(
  persist((set, get) => ({
    sections: [],
    addSection: (s) => set({ sections: [...get().sections, { id: nanoid(), ...s }] }),
    removeSection: (id) => set({ sections: get().sections.filter(s => s.id !== id) }),
    updateSection: (id, props) =>
      set({
        sections: get().sections.map(s =>
          s.id === id ? { ...s, props: { ...s.props, ...props } } : s
        )
      }),
    reorder: (from, to) => {
      const arr = [...get().sections]
      const [m] = arr.splice(from, 1)
      arr.splice(to, 0, m)
      set({ sections: arr })
    },
    setSections: (sections) => set({ sections }),
    clear: () => set({ sections: [] })
  }), { name: 'mini-builder-storage', version: 1 })
)
