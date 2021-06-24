import { useState } from "react";
import TodoList from "./TodoList";
import useTodo from "./useTodo";

function App() {
  const [inputValue, setinputValue] = useState("");
  const { todoList, handleTodoList } = useTodo();
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={({ target: { value } }) => setinputValue(value)}
      />
      <button onClick={() => handleTodoList(inputValue)}>Add To Do</button>
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
