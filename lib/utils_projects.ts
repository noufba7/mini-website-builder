import { SectionData } from './types_projects'

export function exportJSON(sections: SectionData[]) {
  const blob = new Blob([JSON.stringify(sections, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `mini-builder.json`
  a.click()
  URL.revokeObjectURL(url)
}

export async function importJSON(file: File): Promise<SectionData[]> {
  const text = await file.text()
  return JSON.parse(text)
}
