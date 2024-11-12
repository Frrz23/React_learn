import React from 'react'
import { useState } from 'react';
const State = () => {
    const [value, setValue] = useState(0);
    const buttonclick=()=>{
        setValue(value+1);
        console.log(value);
    }
  return (
    <>
    <h1 color='blue'>{value}</h1>
    <button onClick={buttonclick}>Increrment</button>
    </>
  )
}

export default State