import NewToDo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";
import { TodoProvider } from "./store/todoContext";

function App() {
  return (
    <div>
      <TodoProvider>
        <NewToDo />
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;
