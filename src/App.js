import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, removeTodo, fetchTodos } from "./store/todoSlice";

import "./App.css";
import InputField from "./components/InputField";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector((state) => state.todos);

  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const toggleTodoComplete = (todoId) => {};

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}

      <TodoList />
    </div>
  );
}

export default App;
