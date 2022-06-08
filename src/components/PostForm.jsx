import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'


export default function PostForm({create}) {
  const [post, setPost] = useState({title:'', body:''})  

  const addNewPost = (e) =>{
    e.preventDefault();
    if (post.title.length !== 0 && post.body.length !== 0) {
      const newPost = {...post, id: Date.now()}
      create(newPost)
      setPost({title:'', body:''})
    }
  }

  return (
    <form>
      <MyInput 
        type="text" 
        placeholder="Название"
        value={post.title}
        onChange={e=>setPost({...post, title: e.target.value})}
      />
      <MyInput 
        type="text" 
        placeholder="Описаниe" 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
      />
      <MyButton onClick={addNewPost} title="Создать пост"/>
    </form>
  )
}
