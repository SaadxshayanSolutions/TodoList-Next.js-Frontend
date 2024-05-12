"use client"
import { editTodo } from '@/app/_actions/Todos'
import { ITodoCard } from '@/app/interfaces/todos'
import { Button } from '@/components/ui/button'

import React, { useState} from 'react'
import toast from 'react-hot-toast'
import EditTodoForm from '../forms/editTodoForm/EditTodoForm'

const EditTodo = ({todo} : {todo: ITodoCard}) => {

    const [showForm,setShowForm] = useState<boolean>(false)

    const handleShowForm = () => {

        setShowForm(!showForm)
    }

  return (

    <div>

    <Button onClick={handleShowForm} variant="secondary">
        Edit
    </Button>

    {
        showForm && <EditTodoForm todo = {todo} handleShowForm = {handleShowForm} />
    }

    </div>
    
  )
}

export default EditTodo