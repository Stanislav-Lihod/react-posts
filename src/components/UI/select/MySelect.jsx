import React from 'react'

export default function MySelect({options, defaultValue, value, change}) {

  return (
    <select value={value} onChange={e => change(e.target.value)}>
      <option disabled value="">{defaultValue}</option>
      {options.map((option) => (<option key={option.value} value={option.value}>{option.name}</option>))}
    </select>
  )
}
