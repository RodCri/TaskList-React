import { tasks as data} from './tasks.js'
import { useState, useEffect } from 'react';
import './TaskList.css'


function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, [])
  
  return (
    <div className='list__Tasks'>
      {
        tasks.map((task)=>(
          <div key={task.id}>
            <h1>{task.titulo}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList