import { createContext } from 'react';
import { useTodos } from '../hooks/useTodos';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const todoState = useTodos();
  return (
    <TodoContext.Provider value={todoState}>
      {children}
    </TodoContext.Provider>
  );
}
