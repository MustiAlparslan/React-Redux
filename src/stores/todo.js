import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    todo: ""
  },
  reducers: {
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
    setTodos: (state) => {
      state.todos.push(state.todo);
    }
  }
});

export const { setTodo, setTodos } = todo.actions;
export default todo.reducer;
