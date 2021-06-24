const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((val) => (
        <p>{val}</p>
      ))}
    </div>
  );
};

export default TodoList;
