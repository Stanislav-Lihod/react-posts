import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'

export default function PostIdPage() {
  const params = useParams()
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const [fetchComment, isCommentLoaded, commentError] = useFetching(async ()=>{
    const response = await PostService.getComment(params.id)
    setComments(response.data)
  })

  const [fetchPost, isPostLoaded, postError] = useFetching(async ()=>{
    const response = await PostService.getPost(params.id)
    setPost(response.data)
  })

  useEffect(()=>{
    fetchComment(params.id)
    fetchPost(params.id)
  },[])

  return (
    <div>
      {isCommentLoaded 
        ? <Loader/>
        : <div>{post.id}, {post.title}</div>
      }
      <div>Комментарии:</div>
      {isPostLoaded 
        ? <Loader/>
        : <div>
            {comments.map(comment => (
              <div key={comment.id} style={{margin: '30px 10px', border: '1px solid green'}}>
                <div>{comment.email}</div>
                <div>{comment.name}</div>
                <div>{comment.body}</div>
              </div>
            ))}
          </div>
      }
    </div>
    
  )
}
