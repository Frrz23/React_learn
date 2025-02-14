import React, { useState } from 'react'

const Logintest = () => {
    const[name,setname]=useState(
        {
            uname,
            password
        }
    );
    const handlesubmit =()=>{
        console.log(name);
    }
<>
<form action="">
    <label for="uname">Username:</label><br/>
    <input type="text" id="uname" name="uname" value={name.uname} onChange={(e)=>setname(e.target.value)}/><br/>
    <label for="psw">Password:</label><br/>
    <input type="password" id="psw" name="psw"/><br/>
    <input type="submit" value="Submit"/>
 
</form>
</>
}

export default Logintest