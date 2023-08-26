import React from "react";
import Todo from "../models/todo";
import TodoList from "./TodoList";
import classes from "./Todos.module.css";
import { useTodos } from "../store/todoContext";

const Todos: React.FC = (props) => {
  const { todos } = useTodos();
  return (
    <div>
      <ul className={classes.todos}>
        {todos.map((item) => {
          return <TodoList item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Todos;
