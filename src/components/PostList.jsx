import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts, title, remove}) {
  
  if (!posts.length) {
    return <div style={{textAlign: 'center', fontSize: '50px', margin: '40px', fontWeight:'900'}}>Посты не найдены</div>
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => <PostItem number={index + 1} remove={remove} post={post} key={post.id}/>)}
    </div>
  )
}
