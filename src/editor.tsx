import React, { useCallback, useEffect } from 'react'
import { useCodeMirror } from './use-codemirror'
import './editor.css'
import { note } from './App'

interface Props {
  initialDoc: note,
  onChange: (newCurrentNote: note) => void
}

export function Editor(props: Props) {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    (state) => onChange({...initialDoc, content: state.doc.toString() }),
    [onChange, initialDoc]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
      console.log("hi")
    }
  }, [editorView])
  
  return (
    <div className='editor-wrapper' ref={refContainer}></div>  
  )
}



