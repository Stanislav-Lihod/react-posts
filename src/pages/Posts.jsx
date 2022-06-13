import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import MyModal from "../components/Modal/MyModal";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePost";
import '../styles/app.css'
import { getPageCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([])  
  const [filter, setFilter] = useState({sort:'', query:''})
  const [visible, setVisible] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [fetchPosts, isLoaded, error] = useFetching(async (limit, page)=>{
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    setTotalPages(getPageCount(response.headers['x-total-count'], limit))
  })
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(()=>{
    fetchPosts(limit, page)
  },[])

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
      <Pagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        fetchPosts={fetchPosts}
        limit={limit}
      />
      {error && <h1>Ошибка {error}</h1>}
      {isLoaded
        ? <Loader/>
        :<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
      }
    </div>
  );
}

export default Posts;
