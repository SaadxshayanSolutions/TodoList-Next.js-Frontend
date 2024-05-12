import { getServerSession } from "next-auth/next"
import { options } from "./api/auth/[...nextauth]/options"
import AddTodo from "./_components/addTodo/AddTodo"
import SigninForm from "./_components/forms/signinForm"
import AddTodoForm from "./_components/forms/addTodoForm"
import AllTodos from "./_components/allTodos"

export default async function Home() {
  
  return (
    <div>
        <AddTodoForm />  
        <AllTodos/>
    
    </div>
  ) 
}