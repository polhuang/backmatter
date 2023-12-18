import React from 'react'
import { Note } from '../App'

interface Props {
  notes: Note[]
}

export function Sidebar(props: Props) {
  console.log("Sidebar: ", props.notes)
  return (
    <div>
      //
    </div>
  )
}
