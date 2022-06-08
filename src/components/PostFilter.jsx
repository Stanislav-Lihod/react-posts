import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
    <MyInput 
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Поиск..."/>
      <hr style={{margin: '15px 0'}}/>
      <MySelect 
        value={filter.sort}
        change={change => setFilter({...filter, sort: change})}
        defaultValue='Сортировка'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
    </div>
  )
}
