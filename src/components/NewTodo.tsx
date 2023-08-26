import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { useTodos } from "../store/todoContext";

const NewToDo: React.FC = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodos();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;
    addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewToDo;
