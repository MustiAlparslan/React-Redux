import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./stores/counter";
import todoReducer from "./stores/todo";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  }
});
