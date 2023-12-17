import { useEffect, useState, useRef } from 'react'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap, highlightActiveLine } from '@codemirror/view'
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import { indentOnInput, HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { markdown, markdownLanguage }  from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { tags } from '@lezer/highlight'
import { oneDark } from '@codemirror/theme-one-dark'
import { Note } from '../App'

export const transparentTheme = EditorView.theme({
  '&': {
    height: '100%'
  }
})

const syntax = HighlightStyle.define([
  {
    tag: tags.heading1,
    fontSize: '1.8em',
    fontWeight: 'bold'
  },
  { tag: tags.heading2,
    fontSize: '1.4em',
    fontWeight: 'bold'
  },
  {
    tag:tags.heading3,
    fontSize: '1.2em',
    fontWeight: 'bold'
  }
])

import React from 'react'

interface Props {
  initialDoc: Note,
  onChange?: (state: EditorState) => void
}

export const useCodeMirror = <T extends Element>(
  props: Props
): [React.MutableRefObject<T | null>, EditorView?] => {
  const refContainer = useRef<T>(null)
  const [editorView, setEditorView] = useState<EditorView>()
  const { onChange } = props

  useEffect(() => {
    if (!refContainer.current) return

    const startState = EditorState.create({
      doc: props.initialDoc.content,
      extensions: [
        keymap.of([...defaultKeymap, ...historyKeymap]),
        history(),
        indentOnInput(),
        //defaultHighlightStyle.fallback,
        highlightActiveLine(),
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true
        }),
        oneDark, 
        transparentTheme,
        syntaxHighlighting(syntax),
        EditorView.lineWrapping,
        EditorView.updateListener.of(update => {
          if (update.changes) {
            onChange && onChange(update.state)
            console.log(update.state)
          }
        })
      ]
    })

    const view = new EditorView({
      state: startState,
      parent: refContainer.current
    })
    setEditorView(view)
  }, [refContainer])
  return [refContainer, editorView]
}
