import { useSelector } from "react-redux";
import "./App.css";
import TodoBody from "./components/todoBody";
import TodoHeader from "./components/TodoHeader";
import { useEffect, useState } from "react";


function App() {
  const initialState = {
    id:"",
    text:"",
  }
  const [task , setTask] = useState(initialState);

  const handleEdit = (editTask) =>{
    setTask(editTask)
  };
  const handleReset = () =>{
    setTask(initialState)
  }

  
  return (
    <div>
      <h1>This is a Todo App</h1>
      {/* <TodoHeader task={task} handleReset={handleReset}/> */}
      {/* <TodoBody handleEdit={handleEdit} /> */}
    </div>
  );
}

export default App;
