import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [string,setString]=useState("");
  const [value,setValue]=useState(string)

const Change=(event)=>{
    setString(event.target.value)  
}
const Click=()=>{
    setValue(string);
    setString('')
    
}
  return (
    <div>
      <div>
      <h1>{value}</h1>
      <input value={string} onChange={Change}></input>
      <button onClick={Click}>Add</button>
      </div>
    </div>
  );
}

export default App;
