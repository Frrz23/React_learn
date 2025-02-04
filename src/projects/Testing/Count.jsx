import React, { useState } from 'react'


const Count = () => {
    const [count, setCount] = useState(0);
    const[num,setnum] = useState(0);
    const hadleincrement = () => {
      if(count<=100){
        setCount(count + num);
    }
  }
    const hadledecrement = () => {
        setCount(count - num);
    }
  return (
    <>
    <h1>Number</h1>
    <input type="number" value={num} onChange={(e)=>setnum(Number(e.target.value))} />
    <h1 style={{color:'black'}}>Count:{count}</h1>
    <button  onClick={hadleincrement} disabled={count>=100}>Add
    </button>
    <button  onClick={hadledecrement} disabled={count<=0}>Del
    </button>
    </>
  )
}

export default Count