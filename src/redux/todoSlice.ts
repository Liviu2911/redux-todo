import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todos: [{ id: 0, name: "Yes", desc: "It is a nice todo shit" }],
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const { name, desc } = payload
      const length = state.todos.length
      const id = length > 0 ? state.todos[length - 1].id + 1 : 0

      state.todos = [...state.todos, { id, name, desc }]
    },
    removeTodo: (state, action) => {
      const id = action.payload
      state.todos = state.todos.filter(todo => todo.id !== id)
    },

    modifyTodo: (state, { payload }) => {
      const { id, name, desc } = payload
      state.todos = state.todos.map(todo =>
        todo.id === id ? { id, name, desc } : todo
      )
    },
  },
})

export const { addTodo, removeTodo, modifyTodo } = todoSlice.actions

export default todoSlice.reducer
