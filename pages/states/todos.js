import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  setTodos: (items) => set((state) => (state.todos = items)),
}));
