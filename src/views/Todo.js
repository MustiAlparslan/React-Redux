import { useDispatch, useSelector } from "react-redux";
import { setTodo, setTodos } from "../stores/todo";

export default function Todo() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const todos = useSelector((state) => state.todo.todos);

  const addTodo = () => {
    dispatch(setTodos(todo));
  };
  return (
    <div>
      Todo Page
      <br />
      <input
        type="text"
        value={todo}
        onChange={(e) => dispatch(setTodo(e.target.value))}
      />
      <button type="button" onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((itm, index) => (
          <li key={index}>{itm}</li>
        ))}
      </ul>
    </div>
  );
}
