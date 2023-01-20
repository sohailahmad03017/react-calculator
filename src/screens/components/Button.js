import React from 'react'

export default function Button({onClick, label, style}) {
  return (
      <button onClick={onClick} style={style}>{label}</button>
  )
}
