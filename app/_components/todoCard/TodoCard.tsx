import React from 'react'
import EditTodo from '../buttons/EditTodo'
import DeleteTodo from '../buttons/DeleteTodo'
import { ITodoCard } from '@/app/interfaces/todos'
import ToggleStatus from '../buttons/ToggleStatus'
import moment from "moment";

const TodoCard = ({todo} : {todo: ITodoCard}) => {

  const {_id,name,status,desc,dueDate,userId,createdAt} = todo

  const formattedDate = moment.utc(todo.dueDate).local().format("dddd, MMMM D, YYYY h:mm A");

  const isCompleted = status
  return (
    <div className= {`flex justify-between items-center space-x-2 ${isCompleted ? "bg-green-600" : "bg-orange-600"}`}> 
        <div>
          <ToggleStatus todo = {todo}/>
        </div>

        <div className='flex justify-between items-center p-2 rounded-sm grow'>

          <div className='w-1/3'>
              <p className='b-3/12 h-6'>{name}</p>
              <p className='text-xs text-wrap'>{desc}</p>  
          </div>

          <p className='b-4/12'>Due On: {formattedDate}</p>

          <div className='flex justify-around space-x-4'>

              <EditTodo todo = {todo} />
              <DeleteTodo id = {_id}/>
          </div>

        </div>
    </div>
  )
}

export default TodoCard