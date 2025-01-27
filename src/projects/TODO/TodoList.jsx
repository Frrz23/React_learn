import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'

const TodoList = ({data,checked, ondelete,onHandleCheckedTodo}) => {
  return (
    <li  className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <FaCheck />
    </button>
    <button className="delete-btn" onClick={()=>ondelete(data)}
    ><FaDeleteLeft />

    </button>
  </li>
  )
}

export default TodoList