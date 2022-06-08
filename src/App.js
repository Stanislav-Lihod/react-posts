import React, { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/app.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'аа', body: 'дд'},
    {id: 2, title: 'ячс', body: 'фыв'},
    {id: 3, title: 'ячсы', body: 'фВ'},
    {id: 4, title: 'гег', body: 'ЙЦУ'},
  ])  

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(()=>{
    if (selectedSort) {
     return [...posts].sort((a, b)=>a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (post) =>{
    setPosts([...posts, post])
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (value) =>{
    setSelectedSort(value)
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <MyInput 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Поиск..."/>
      <hr style={{margin: '15px 0'}}/>
      <MySelect 
        value={selectedSort}
        change={sortPost}
        defaultValue='Сортировка'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
      {sortedAndSearchedPosts.length
        ?<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'}/>
        :<div>Посты не найдены</div>       
      }
    </div>
  );
}

export default App;
