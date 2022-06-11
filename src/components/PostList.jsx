import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'

export default function PostList({posts, title, remove}) {
  
  if (!posts.length) {
    return <div style={{textAlign: 'center', fontSize: '50px', margin: '40px', fontWeight:'900'}}>Посты не найдены</div>
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={300}
            classNames="post"
          >
            <PostItem number={index + 1} remove={remove} post={post}/>
          </CSSTransition>          
        ))}
      </TransitionGroup>
    </div>
  )
}
