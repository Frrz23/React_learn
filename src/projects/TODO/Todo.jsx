import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";


import "./Todo.css";

const Todo = () => {
  const [inputval, setinputval] = useState("");
  const [task, settask] = useState([]);
  const [date, setdate] = useState("");
  
  const handleinputChange = (value) => {
    setinputval(value);
  };

  const handleformsubmit = (event) => {
    event.preventDefault(); 
    if (!inputval) return;

    if(task.includes(inputval)) {
      setinputval("");
      return;
    }; 

    settask((prev) => {
      return [...prev, inputval]; 
    });

    setinputval("");  
  };
  useEffect(() => {
    const interval=setInterval(()=>{
    const now = new Date();
    const newdate=now.toLocaleDateString();
    const newtime=now.toLocaleTimeString();
    setdate(`${newdate} ${newtime}`);
    },1000);
    return () => clearInterval(interval);
  },[]);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">
          {date};
        </h2>
      </header>
      <section className="form">
        <form onSubmit={handleformsubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputval}
              onChange={(event) => handleinputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((task, index) => {
            return <li key={index} className="todo-item">
              <span>{task}</span>
              <button className="check-btn"><FaCheck />
              </button>
              <button className="delete-btn"><FaDeleteLeft />

              </button>
            </li>
          })} 
        </ul>

      </section>
    </section>
  );
};

export default Todo;
