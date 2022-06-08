import React, { useMemo, useState } from "react";
import MyModal from "./components/Modal/MyModal";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import './styles/app.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'аа', body: 'дд'},
    {id: 2, title: 'ячс', body: 'фыв'},
    {id: 3, title: 'ячсы', body: 'фВ'},
    {id: 4, title: 'гег', body: 'ЙЦУ'},
  ])  

  const [filter, setFilter] = useState({sort:'', query:''})
  const [visible, setVisible] = useState(false)

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
    setVisible(false)
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyModal
        visible={visible}
        setVisible={setVisible}
      >
        <PostForm create={createPost}/>
      </MyModal>
      <MyButton
        style={{marginTop:'30px'}}
        onClick={()=>{setVisible(true)}}
        title='Создать пост'
      />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
    </div>
  );
}

export default App;
