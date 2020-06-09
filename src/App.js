import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Introductin to JavaScript",
      isCompleted: false,
      id: Math.random(),
    },
    {
      text: "Advance JavaScript",
      isCompleted: false,
      id: Math.random(),
    },
    {
      text: "Introduction to React",
      isCompleted: false,
      id: Math.random(),
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [{ text }, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    // newTodos.filter((todo) => todo.id !== id);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <div className="todo-list">
        <h1>React Todo App</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            id={todo.id}
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
