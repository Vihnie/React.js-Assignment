import { useState, useEffect } from 'react';
import { fetchTodos } from '../api/todos';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos()
      .then(setTodos)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { todos, loading, error };
}

