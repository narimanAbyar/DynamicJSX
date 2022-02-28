import React from 'react';
import './App.css';
import Person from './person';

function App() {
  return (
    <div>
     <Person fname="nariman" lname="abyar" age="25"/>
     <Person fname="amir" lname="askari" age="22"/>
     <Person fname="shayan" lname="ashoori" age="23">sene tabiei</Person>
    </div>
  );
}

export default App;
