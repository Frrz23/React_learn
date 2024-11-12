import React from 'react';

const ProfileCard = (props) => {
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      {props.greeting} 
      {props.children}
      </>
  );
}

export default ProfileCard;
