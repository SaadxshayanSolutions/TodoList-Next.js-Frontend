"use server"
import React from 'react'
import EditTodo from '../buttons/EditTodo'
import DeleteTodo from '../buttons/DeleteTodo'
import { getAllTodos } from '@/app/_actions/Todos'
import TodoCard from '../todoCard/TodoCard'

const AllTodos = async () => {

    const allTodos = await getAllTodos()

    console.log('all Todos')
    
  return (
    <div className='mt-4 bg-gray-800 rounded-sm h-full space-y-4 p-4'>

        {
            allTodos?.data?.map(todo => <TodoCard todo = {todo} key = {todo._id} />)
        }
    </div>
  )
}

export default AllTodos