import { useState } from 'react'
import './App.css'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import ReactSwitch from 'react-switch'
import { useThemeContext } from './context/ThemeContext'

function App() {
  const {contextTheme, setContextTheme} = useThemeContext()

  const handleSwitch = (nextChecked) =>{
    setContextTheme((state) => (state === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className='todo' id={contextTheme}>
      <div className="todo__header">
        <h1 className="todo__title">Todo</h1>
      <button onClick={handleSwitch} >
        <img src={contextTheme === 'light' ? './public/icon-moon.svg' : './public/icon-sun.svg'} alt="" />
      </button>
        <TaskForm></TaskForm>
      </div>
        <div className='todo__list'>
        <TaskList></TaskList>
      </div>
    </div>
  )
}

export default App
