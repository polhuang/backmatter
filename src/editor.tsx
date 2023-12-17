import React, { useCallback, useEffect } from 'react'
import { useCodeMirror } from './use-codemirror'
import './editor.css'
import { DocInput } from '@codemirror/language'
import { note } from './App'

interface Props {
  initialDoc: note,
  onChange: (newCurrentNote: note) => void
}

export function Editor(props: Props) {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    (state) => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])
  
  return (
    <div className='editor-wrapper' ref={refContainer}></div>  
  )
}



