"use client"
import { deleteTodo } from '@/app/_actions/Todos'
import { Button } from '@/components/ui/button'
import React, { useTransition } from 'react'
import toast from 'react-hot-toast'

const DeleteTodo = ({id} : {id:string}) => {

    console.log("id",id)

    const [isPending,startTransition] = useTransition()

    const handleDeleteTodo = () => {

        startTransition(async() => {
            const response =  await deleteTodo(id)
 
            if(!response.success) {
                 toast.error(response.message)
                 return;
            }
            
            toast.success("Todo Delted succesfully")
         })

        try {
            
        } catch (error:any) {
            toast.error(error.message)
            
        }      
    }
  return (

    <Button onClick={handleDeleteTodo} variant="destructive">
        {
            isPending ? "Deleting..." : "Delete"
        }
    </Button>
  )
}

export default DeleteTodo