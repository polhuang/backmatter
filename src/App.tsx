import React, { useState, useCallback } from 'react'
import './App.css'
import { Editor } from './editor'

export function App() {
  const [doc, setDoc] = useState<string>("Hello pol\n")

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])
  
  return (
    <div className="app"><Editor onChange={handleDocChange} initialDoc={doc} /></div>
  )
}
