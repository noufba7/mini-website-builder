'use client'
import SectionLibrary from '../components/SectionLibrary'
import CanvasPreview from '../components/CanvasPreview'
import { useBuilderStore } from '../lib/store_projects'
import { exportJSON, importJSON } from '../lib/utils_projects'
import '../styles/global.css'

export default function Page() {
  const sections = useBuilderStore(state => state.sections)
  const setSections = useBuilderStore(state => state.setSections)

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    const imported = await importJSON(e.target.files[0])
    setSections(imported)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <a
          href="./Nouf Baabbad-CV.pdf"
          download
          className="fixed bottom-6 right-6 px-4 py-2 bg-black text-white rounded shadow transition z-50"
        >
          Download My CV
        </a>
      {/* responsive side bar*/}
      <aside className="w-full md:fixed md:top-0 md:left-0 md:h-full md:w-64 p-4 bg-white space-y-4 z-20">
        <SectionLibrary />
        <div className="p-4 space-y-2">
          <button
            onClick={() => exportJSON(sections)}
            className="px-3 py-2 bg-black text-white rounded w-full"
          >
            Export JSON
          </button>
          <input
            type="file"
            accept="application/json"
            onChange={handleImport}
            className="mt-2 border rounded w-full p-1"
          />
        </div>
      </aside>

      <main className="md:ml-64 p-6">
        <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
          <CanvasPreview />
        </div>
      </main>
    </div>
  )
}
