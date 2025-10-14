'use client'
import React from 'react'
import { SectionData } from '../lib/types_projects'
import { useBuilderStore } from '../lib/store_projects'

export default function SectionRenderer({ section }: { section: SectionData }) {
  const updateSection = useBuilderStore(s => s.updateSection)
  const { type, props, id } = section

  switch(type) {
    case 'hero':
      return (
        <div className="p-3 border-gray-600 rounded mb-3 bg-gray-50">
          <h2
            className="text-xl font-bold"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => updateSection(id, { title: e.currentTarget.textContent })}
          >
            {props?.title || 'Title'}
          </h2>
          <p
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => updateSection(id, { description: e.currentTarget.textContent })}
          >
            {props?.description || 'Description'}
          </p>
          <img
            src={props?.image || '/URL image'}
            className="mt-2 w-full h-40 object-cover rounded"
            alt=""
          />
          <input
            type="text"
            value={props?.image || ''}
            onChange={(e) => updateSection(id, { image: e.target.value })}
            placeholder="Image URL"
            className="border-gray-200 p-1 w-full mt-2"
          />
        </div>
      )
    case 'header':
      return (
        <h1
          className="text-lg font-semibold"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => updateSection(id, { title: e.currentTarget.textContent })}
        >
          {props?.title || 'Header Title'}
        </h1>
      )
    case 'footer':
      return (
        <div
          className="text-sm text-gray-500"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => updateSection(id, { text: e.currentTarget.textContent })}
        >
          {props?.text || 'Footer Text'}
        </div>
      )
    case 'card':
      return (
        <div className="p-3 border-gray-200  outline-none rounded mb-3 bg-gray-50">
          <h3
            className="font-semibold outline-none"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => updateSection(id, { title: e.currentTarget.textContent })}
          >
            {props?.title || 'Card Title'}
          </h3>
          <p 
            className="text-sm text-gray-600 mt-4 outline-none"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => updateSection(id, { body: e.currentTarget.textContent })}
          >
            {props?.body || 'Card Body'}
          </p>
        </div>
      )
    default:
      return null
  }
}
