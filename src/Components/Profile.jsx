import React from 'react'
import ProfileCard from './ProfileCard'

const Profile = () => {
  return (
    <>
    <ProfileCard name="Alice" age={25} greeting={
        <div>
          <h1>Hello</h1>
        </div>
  
    }>
        
      <p>Choose</p>
      <button>Check</button>
    </ProfileCard>
   
  

    </>
  )
}

export default Profile