import React from 'react'

export default function Screen({value, onChange}) {
  return (
    <div>
        <input value={value} onChange={(e)=>onChange(e.target.value)} autoFocus={true} className='screen' ></input>
    </div>
  )
}
