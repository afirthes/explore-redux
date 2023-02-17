import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";

import { addTodo, removeTodo } from "./store/todoSlice";

import "./App.css";
import InputField from "./components/InputField";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };

  const toggleTodoComplete = (todoId) => {};

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
