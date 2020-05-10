import React from 'react'
import type { ReactElement } from 'react'

export function DisplayModeToggler(): ReactElement {
  return (
    <div>
      <input type='button' value='Degree' />
      <input type='button' value='Pitch' />
    </div>
  )
}
