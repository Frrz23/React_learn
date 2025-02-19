import { useState } from "react";

import "./App.css";
import State from "./Components/State";
import Profile from "./Components/Profile";
import Product from "./Components/Product";
import Toogleswitch from "./projects/ToogleSwitch/Toogleswitch";
import Todo from "./projects/TODO/Todo";
import Count from "./projects/Testing/Count";
import Formtest from "./projects/Testing/Formtest";
import TestCount from "./projects/Testing/TestCount";


function App() {
  // const [count, setCount] = useState(0)

  // const age = 10;
  // return (
  //   <>
  //   <p>{age>=18?"okay":"Ban"}</p>
  //   </>
  // )
  // const arr=[1,2,3,4,5,6,7,8]
  // const handleButtonClick = (event) =>{
  //   console.log(event);
  //     alert("bad");

  // }
  return (
    <>
      {/* {arr.map((arr)=>(
    <div key={arr}>{arr}</div>
  ))} */}

      {/* <Profile></Profile> */}

      {/* <button onClick={handleButtonClick}>Sam</button> */}
      <TestCount></TestCount>

    </>
  );
}

export default App;
