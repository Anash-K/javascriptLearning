import "./App.css";
import TodoBody from "./components/todoBody";
import TodoHeader from "./components/TodoHeader";
import { useState } from "react";

function App() {
  return (
    <div>
      <TodoHeader />
      <TodoBody />
    </div>
  );
}

export default App;
