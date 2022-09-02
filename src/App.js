import React,{useState} from 'react';
import AddTask from'./AddTask';
import DisplayTask from './DisplayTask';
import './App.css';

function App() {
  const [todo,setTodo]=useState([{id:1,task:"LearnReact"},{id:2,task:"PracticeReact"}]);
  const onSaveData=(input)=>{
    console.log(input);
setTodo([...todo,input]);
console.log(todo);
  }

  return (
    <div>
      <h1>TodoList App</h1>   
   <div><AddTask onSaveData={onSaveData}/></div>
   <div><DisplayTask todo={todo}/></div>
   </div>
  );
}

export default App;
