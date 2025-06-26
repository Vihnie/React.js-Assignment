import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from '../components/TodoItem';

export default function HomePage() {
  const { todos, loading, error } = useContext(TodoContext);

  if (loading) return <p className="p-4">Loading…</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="divide-y">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={() => {}} />
        ))}
      </ul>
    </div>
  );
}
