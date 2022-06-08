import React from 'react'
import classes from './MyButton.module.css'

export default function MyButton(props) {
  return (
    <button className={classes.myBtn} {...props}>{props.title}</button>
  )
}
