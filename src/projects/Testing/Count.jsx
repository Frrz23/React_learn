import React, { useState } from 'react'
import "../TODO/Todo.css";


const Count = () => {
    const [count, setCount] = useState(0);
  return (
    <>
    <h1 className='text-pink-500'>Count:{count}</h1>
    <button onClick={() =>setCount(count+1) }>
    </button>
    </>
  )
}

export default Count