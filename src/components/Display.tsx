import React from 'react'
import { State } from './shared/context'

const Display = ({count}:State) => {
  return (
    <div>{count}</div>
  )
}

export default Display