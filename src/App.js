import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
    }
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        completed: false,
      },
    ]);
    setText("");
  };

  const removeTodo = (todoId) => {
    console.log(todos);
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        todo.completed = !todo.completed;

        return {
          ...todo,
          completed: todo.completed,
        };
      })
    );
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />

      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
