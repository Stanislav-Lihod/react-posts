import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/app.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'аа', body: 'дд'},
    {id: 2, title: 'ячс', body: 'фыв'},
    {id: 3, title: 'ячсы', body: 'фВ'},
    {id: 4, title: 'гег', body: 'ЙЦУ'},
  ])  

  const [filter, setFilter] = useState({sort:'', query:''})

  const sortedPosts = useMemo(()=>{
    if (filter.sort) {
     return [...posts].sort((a, b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (post) =>{
    setPosts([...posts, post])
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
    </div>
  );
}

export default App;
