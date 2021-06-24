import { useState } from "react";

const useTodo = () => {
  const [todoList, setTodoList] = useState([]);

  const handleTodoList = (todo) => {
    setTodoList([...todoList, todo]);
  };

  return {
    todoList,
    handleTodoList,
  };
};

export default useTodo;
