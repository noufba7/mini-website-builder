'use client'
import React, { useCallback } from 'react'
import { useBuilderStore } from '../lib/store_projects'
import SectionRenderer from './SectionRenderer'
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


function SortableItem({ section, index }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id })
  const style = { transform: CSS.Transform.toString(transform), transition }
  const remove = useBuilderStore(s => s.removeSection)

  return (
    <div ref={setNodeRef} style={style} className="bg-white p-3 rounded shadow-sm mb-3">
      <div className="flex justify-between items-start gap-2">
        <div className="flex items-center gap-2">
          <div {...attributes} {...listeners} className="cursor-grab px-2 py-1 m-3 bg-gray-100 rounded">⠿</div>
          <div className="text-sm font-medium">{section.type}</div>
        </div>
        <button onClick={() => remove(section.id)} className="text-red-500 text-sm">Delete</button>
      </div>

      {/* display the section */}
      <SectionRenderer section={section} />

    </div>
  )
}



export default function CanvasPreview() {
  const sections = useBuilderStore(s => s.sections)
  const reorder = useBuilderStore(s => s.reorder)
  const sensors = useSensors(useSensor(PointerSensor))

  const onDragEnd = useCallback((event: any) => {
    const { active, over } = event
    if (!over) return
    const oldIndex = sections.findIndex(s => s.id === active.id)
    const newIndex = sections.findIndex(s => s.id === over.id)
    if (oldIndex !== newIndex) reorder(oldIndex, newIndex)
  }, [sections, reorder])

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
        {sections.length === 0 && <div className="p-8 text-center text-gray-400">Add sections from sidebar</div>}
        {sections.map((s, i) => <SortableItem key={s.id} section={s} index={i} />)}
      </SortableContext>
    </DndContext>
  )
}
