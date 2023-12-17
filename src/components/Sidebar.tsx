import React from 'react'
import { Note } from '../App'

interface Props {
  currentNote: Note
}

export function Sidebar(props: Props) {
  console.log("Sidebar: ", props.currentNote.content)
  return (
    <div>
      //
    </div>
  )
}
