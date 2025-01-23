import React, { useEffect, useState } from 'react'

const TodoDate = () => {
    const [date, setdate] = useState("");

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
    <h2 className="date-time"> {date};</h2>
  )
}

export default TodoDate