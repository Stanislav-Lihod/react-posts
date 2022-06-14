import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../routes'

export default function AppRouters() {
  return (
    <Routes>
      {routes.map((route, index)=>(
        <Route key={index} path={route.path} element={route.component()} exact={route.exact} />
      ))}
    </Routes>
  )
}
