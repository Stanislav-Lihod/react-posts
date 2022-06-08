import React from 'react'
import stl from './MyModal.module.css'

export default function MyModal({children, visible, setVisible}) {

  const classes = [stl.myModal]
  visible && classes.push(stl.active)

  return (
    <div className={classes.join(' ')} onClick={()=>{setVisible(false)}}>
      <div className={stl.myModalContent} onClick={e=>{e.stopPropagation()}}>
        {children}
      </div>
    </div>
  )
}
