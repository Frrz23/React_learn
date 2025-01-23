import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'

const TodoList = ({ key,data, ondelete }) => {
  return (
    <li key={key} className="todo-item">
    <span>{data}</span>
    <button className="check-btn"><FaCheck />
    </button>
    <button className="delete-btn"
     onClick={()=>ondelete(data)}
    ><FaDeleteLeft />

    </button>
  </li>
  )
}

export default TodoList