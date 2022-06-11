import React from 'react'
import { usePagination } from '../../../hooks/usePagination'
import MyButton from '../button/MyButton'

export default function Pagination({totalPages, page, setPage, fetchPosts, limit}) {
  const arrayPages = usePagination(totalPages)

  const changePage = (p) =>{
    if (page !== p) {
      setPage(p)
      fetchPosts(limit, p)
    }
  }
  return (
    <div>
      {arrayPages.map(p=>(
        <MyButton 
          onClick={()=>{changePage(p)}}
          active = {page === p}
          key={p} 
          title={p}
        />
      ))}
    </div>
  )
}
