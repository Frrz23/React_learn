import React, { useEffect, useState } from 'react'

const TestCount = () => {
const [count,setCount] =useState(0);

useEffect(()=>{
    const timer=setInterval(() => {
        setCount((prev)=>prev+1)
    }, 1000);

    return ()=>clearInterval(timer); // cleanup function to prevent memory leak
},[]);    // empty array as second argument to run useEffect only once (on mount)                               
  return (
    <>
    <h1>Count:</h1>
    <h1>{count}</h1>
    </>
  )
}

export default TestCount