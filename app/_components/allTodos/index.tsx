"use server"
import React from 'react'
import TodoCard from '../todoCard/TodoCard'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { IErrorResponseArray, IUserSignin } from '@/app/interfaces/user'
import { optionGenerator } from '@/app/_actions/auth'
import { ITodoResponse } from '@/app/interfaces/todos'
import { getAllTodos } from '@/app/_actions/Todos'

const AllTodos = async () => {
    
    const allTodos = await getAllTodos()
    
  return (
    <div className='mt-4 bg-gray-800 rounded-sm h-full space-y-4 p-4'>

        {
            allTodos?.data?.map(todo => <TodoCard todo = {todo} key = {todo._id} />)
        }
    </div>
  )
}

export default AllTodos