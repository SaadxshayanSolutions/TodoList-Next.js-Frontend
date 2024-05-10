import { getServerSession } from "next-auth/next"
import { options } from "./api/auth/[...nextauth]/options"
import AddTodo from "./_components/addTodo/AddTodo"

export default async function Home() {
  
  const session = await getServerSession(options)

  console.log(session,"sessions")

  return (
    <div>
        <AddTodo/>  
    
    </div>
  ) 
}