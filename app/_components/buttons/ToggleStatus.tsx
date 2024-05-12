"use client"
import { toggleStatus } from '@/app/_actions/Todos'
import { ITodoCard } from '@/app/interfaces/todos'
import React, { useTransition } from 'react'
import toast from 'react-hot-toast'

const ToggleStatus = ({todo} : {todo: ITodoCard}) => {

    const [isPending, startTransition] = useTransition()

    const handleChange = () => {
        startTransition(async() => {
            try {

                const response = await toggleStatus(todo,todo._id)

                if(!response.success) {
                    toast.error(response.message)
                    return;
                }
                toast.success("Status updated Successfully")
                
            } catch (error : any) {
                
                toast.error(error.message)
            }
        })
    }

  return (
    <div>
         <div className='p-2'>
          <input type="checkbox"  checked={todo.status} onClick={handleChange} disabled = {isPending} />
        </div>
    </div>
  )
}

export default ToggleStatus