import React, { useState, useCallback } from 'react'
import './App.css'
import { Editor } from './components/Editor'
import { Sidebar } from './components/Sidebar'

export interface Note {
  noteID: number,
  title: string,
  content: string
}

const NotesDB: Note[] = [
  {
    noteID: 0,
    title: "Good",
    content: "Morning"
  },
  {
    noteID: 1,
    title: "Bad",
    content: "Night"
  }
]

export function App() {
  const [currentNote, setCurrentNote] = useState<Note>(NotesDB[0])

  const handleDocChange = useCallback((newCurrentNote: Note) => {
    setCurrentNote(newCurrentNote)
  }, [])

    
  return (  
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={currentNote} />
      <Sidebar notes={NotesDB} />
    </div>
  )
}
