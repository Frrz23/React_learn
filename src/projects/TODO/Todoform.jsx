import React, { useState } from 'react'

const Todoform = ({onaddTodo}) => {
  const [inputval, setinputval] = useState({});
  const handleinputChange = (value) => {
    setinputval({id:value, content:value, checked:false});
  };
  const handleformsubmit = (event) => {
    event.preventDefault();
    onaddTodo(inputval);
    setinputval({ id: "", content: "", checked: false });  

  }
  return (
    <section className="form">
        <form onSubmit={handleformsubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputval.content}
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
  )
}

export default Todoform