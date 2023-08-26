import React from "react";
import Todo from "../models/todo";
import classes from "./TodoList.module.css";
import { useTodos } from "../store/todoContext";

const TodoList: React.FC<{ item: Todo }> = (props) => {
  const { removeTodo } = useTodos();
  return (
    <li
      className={classes.item}
      key={props.item.id}
      onClick={() => {
        removeTodo(props.item.id);
      }}
    >
      {props.item.text}
    </li>
  );
};

export default TodoList;
