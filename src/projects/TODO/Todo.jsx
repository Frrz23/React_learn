import React, { useEffect, useState } from "react";
import Todoform from "./Todoform";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";



import "./Todo.css";

const Todo = () => {
  const [task, settask] = useState([]);


  const handleformsubmit = (inputval) => {
    if (!inputval) return;

    if(task.includes(inputval)) {
      return;
    }; 

    settask((prev) => {
      return [...prev, inputval]; 
    });

  };
  

  const handledelete = (value) => {
    const updated = task.filter((curtask) => curtask !== value);
    settask(updated);
  };
  

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate/>  
      </header>
      <Todoform onaddTodo={handleformsubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curtask, index) => {
           return(<TodoList key={index} data={curtask} ondelete={handledelete}/>)
          })} 
        </ul>

      </section>
    </section>
  );
};

export default Todo;
