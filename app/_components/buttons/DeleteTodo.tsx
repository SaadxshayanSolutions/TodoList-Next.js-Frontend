"use client"
import { deleteTodo } from '@/app/_actions/Todos'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React, { useTransition } from 'react'
import toast from 'react-hot-toast'

const DeleteTodo = ({id} : {id:string}) => {

    console.log("id",id)

    const [isPending,startTransition] = useTransition()

    const router = useRouter()

    const handleDeleteTodo = () => {

        try {

            startTransition(async() => {
                const response =  await deleteTodo(id)
     
                if(!response.success) {
                     toast.error(response.message)
                     return;
                }
                
                toast.success("Todo Delted succesfully")

                router.refresh()
                
             })
            
        } catch (error:any) {
            toast.error(error.message)
            
        }      
    }
  return (

    <Button onClick={handleDeleteTodo} variant="destructive" disabled = {isPending}>
        {
            isPending ? "Deleting..." : "Delete"
        }
    </Button>
  )
}

export default DeleteTodo