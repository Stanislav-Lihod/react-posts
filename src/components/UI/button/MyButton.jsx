import React from 'react'
import stl from './MyButton.module.css'

export default function MyButton(props) {

  const styles = [stl.myBtn]
  props.active && styles.push(stl.active)

  return (
    <button className={styles.join(' ')} {...props}>{props.title}</button>
  )
}
