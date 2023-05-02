import { useState } from "react"
import './TaskForm.css'

function TaskForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  } 

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" className="titleTask" placeholder="Create a new todo..." 
      onChange={(e) => {
        setTitle(e.target.value);      
      }} />
    </form>
  )
}

export default TaskForm