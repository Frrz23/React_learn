import React, { useEffect, useState } from "react";
import Todoform from "./Todoform";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";



import "./Todo.css";

const Todo = () => {
  const [task, settask] = useState([]);

  const handleformsubmit = (inputval) => {
    // Ensure inputval has the expected properties
    const { id, content, checked } = inputval;
  
    // Check if content is valid
    if (!content) return;
  
    // Prevent duplicate tasks
    const val = task.find((curtask) => curtask.content === content);
    if (val) return;
  
    // Add new task
    settask((prev) => [...prev, { id, content, checked }]);
  };
  
  

  const handledelete = (value) => {
    const updated = task.filter((curtask) => curtask.content !== value);
    settask(updated);
  };
  const handleClearTodoData = () => {
    settask([]);
  };

  //todo handleCheckedTodo functionality
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curtask) => {
      if (curtask.content === content) {
        return { ...curtask, checked: !curtask.checked };
      } else {
        return curtask;
      }
    });
    settask(updatedTask);
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
          {task.map((curtask) => {
           return(<TodoList key={curtask.id} data={curtask.content} checked={curtask.checked}
            ondelete={handledelete} onHandleCheckedTodo={handleCheckedTodo}/>)
          })} 
        </ul>

      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
        </section>

    </section>
  );
};

export default Todo;
