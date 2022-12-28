import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filterData: [],
  loading: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodoList(state, action) {
      state.loading = true;
    },
    getTodoListSuccess(state, action) {
      state.todos = action.payload;
      state.filterData = action.payload;
      state.loading = false;
    },
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
      state.filterData = [...state.filterData, action.payload];
    },
    updateTodo(state, action) {
      const { id, name, completed } = action.payload;

      state.todos = [...state.todos].map((todo) =>
        todo.id === id
          ? {
              ...todo,
              name: name,
              completed: JSON.parse(completed),
            }
          : todo
      );
      state.filterData = [...state.filterData].map((todo) =>
        todo.id === id
          ? {
              ...todo,
              name: name,
              completed: JSON.parse(completed),
            }
          : todo
      );
    },
    deleteTodo(state, action) {
      state.todos = [...state.todos].filter(
        (todo) => todo.id !== action.payload.id
      );
      state.filterData = [...state.filterData].filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    searchTodo(state, action) {
      state.filterData = state.todos.filter((todo) =>
        todo.name.includes(action.payload)
      );
    },
    filterTodo(state, action) {
      state.filterData =
        action.payload === "all"
          ? [...state.todos]
          : [...state.todos].filter(
              (todo) => todo.completed === JSON.parse(action.payload)
            );
    },
  },
});

// Actions
export const todoActions = todoSlice.actions;
// Selectors
export const selectTodoList = (state) => state.todo.todos;
export const selectFilterData = (state) => state.todo.filterData;
// Reducer
const todoReducer = todoSlice.reducer;
export default todoReducer;
