'use client'
import React from 'react'
import { useBuilderStore } from '../lib/store_projects'
import { SectionType } from '../lib/types_projects'
import { BuilderState } from '../lib/store_projects'

const PREMADE = [
  { type: 'hero' as SectionType, label: 'hero' },
  { type: 'header' as SectionType, label: 'header' },
  { type: 'footer' as SectionType, label: 'footer' },
  { type: 'card' as SectionType, label: 'card' },
]

export default function SectionLibrary() {
  const addSection = useBuilderStore((s: BuilderState) => s.addSection)

  function handleAdd(type: SectionType) {
    const defaults: Record<string, any> = {
      hero: { title: 'Welcome', description: 'A short description', image: '/URL image' },
      header: { title: 'My Site' },
      footer: { text: '© Rekaz' },
      card: { title: 'Card Title', body: 'Card body' }
    }
    addSection({ type, props: defaults[type] })
  }

  return (
    <div className="p-4 space-y-3">
      <h3 className="font-semibold">Section Library</h3>
      <div className="grid gap-2">
        {PREMADE.map(p => (
          <button key={p.type} onClick={() => handleAdd(p.type)} className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-left">
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
