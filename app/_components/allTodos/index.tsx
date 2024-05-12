"use server"
import React from 'react'
import TodoCard from '../todoCard/TodoCard'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { IUserSignin } from '@/app/interfaces/user'
import { optionGenerator } from '@/app/_actions/auth'

const AllTodos = async () => {
    
    const URL = process.env.SERVER_URL;

    const session: { user: IUserSignin } | null = await getServerSession(
        options
      );

      const RequestOptions = await optionGenerator(
        "GET",
        {},
        session?.user.token
      );

    const res = await fetch(`${URL}/todos`, RequestOptions);

    const allTodos = await res.json()
    
  return (
    <div className='mt-4 bg-gray-800 rounded-sm h-full space-y-4 p-4'>

        {
            allTodos?.data?.map(todo => <TodoCard todo = {todo} key = {todo._id} />)
        }
    </div>
  )
}

export default AllTodos