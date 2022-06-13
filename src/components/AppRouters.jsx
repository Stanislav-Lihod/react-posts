import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'

export default function AppRouters() {
  return (
    <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/posts" element={<Posts/>}></Route>
      <Route path="/posts/:id" element={<PostIdPage/>}></Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
  )
}
