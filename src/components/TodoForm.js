import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [Value,setValue]=useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Value){
      addTodo(Value)
      setValue('')
    }
    }
 
  return (
    <from onSubmit={handleSubmit} className="TodoForm">
        <input type="text" value={Value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
        <button type="submit" className='todo-btn'>Add Task</button>
    </from>

  )
}

export default TodoForm
