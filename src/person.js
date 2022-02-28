import React from 'react';

const Person=(props)=>{
  return (
    <div>
      <p>i am {`${props.fname} ${props.lname}`}</p>
      <p>Age:i am {props.age} years old</p>
      <p>{props.children}</p>
      
    </div>
  );
}

export default Person;
