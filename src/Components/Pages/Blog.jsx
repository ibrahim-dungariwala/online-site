import { useSelect } from '@mui/base'
import React from 'react'
import { useSelector } from 'react-redux'
import { Decreament } from './Decreament'
import { Increament } from './Increament'
// import { Counter } from '../Counter/Counter'

export const Blog = () => {
  const select = useSelector((state)=>state)
  const count = select.CountReducer.count
  console.log(select.CountReducer.count)
  return (
    <div>
        <h1>Blog</h1>
        {/* <Counter/> */}
        <Increament/>
        <h1>{count}</h1>
        <Decreament/>
    </div>
  )
}
