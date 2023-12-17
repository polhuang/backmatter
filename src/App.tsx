import React, { useState, useCallback } from 'react'
import './App.css'
import { Editor } from './editor'

export interface note {
  title: string,
  content: string
}

export function App() {
  const [currentNote, setCurrentNote] = useState<note>({ title: "hi", content: "dddhi" })

  const handleDocChange = useCallback((newCurrentNote: note) => {
    setCurrentNote(newCurrentNote)
  }, [])
  
  return (
    <div className="app"><Editor onChange={handleDocChange} initialDoc={currentNote} /></div>
  )
}
