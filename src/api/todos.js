const API = 'https://jsonplaceholder.typicode.com/todos';

export async function fetchTodos() {
  const res = await fetch(${API}?_limit=5);
  if (!res.ok) throw new Error('Failed to fetch todos');
  return res.json();
}

