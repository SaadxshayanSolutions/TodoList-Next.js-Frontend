"use client"
import React, { useState } from 'react'
import AddTodoForm from '../forms/addTodoForm'
import CustomButton from '../buttons/CustomButton'

const AddTodo = () => {

    const [showForm, setShowForm] = useState(false)

    const handleShowForm = () => {
        setShowForm(!showForm)
    }
  return (
    <div>
        <div>
            <CustomButton handleFunction={handleShowForm} text = "Add Todo"/>
        </div>
        
        {
            showForm && <AddTodoForm/>
        }
    </div>
  )
}

export default AddTodo