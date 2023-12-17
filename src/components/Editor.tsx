import React, { useCallback, useEffect } from 'react'
import { useCodeMirror } from '../utils/use-codemirror'
import './Editor.css'
import { Note } from '../App'
import { EditorState } from '@codemirror/state'

interface Props {
  initialDoc: Note,
  onChange: (newCurrentNote: Note) => void
}

export function Editor(props: Props) {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    (state: EditorState) => onChange({...initialDoc, content: state.doc.toString() }),
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



