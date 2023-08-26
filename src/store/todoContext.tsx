import { createContext, useState, useContext } from "react";
import Todo from "../models/todo";

type TodoStates = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  children?: React.ReactNode;
};

const TodoContext = createContext<TodoStates>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodoProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleNewTodo = (newTodo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: newTodo },
    ]);
  };

  const handleRemoveTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoStates = {
    todos: todos,
    addTodo: handleNewTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

export { TodoProvider, useTodos };
