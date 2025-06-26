import Button from './Button';

export default function TodoItem({ todo, onDelete }) {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span>{todo.title}</span>
      <Button onClick={() => onDelete(todo.id)}>Delete</Button>
    </li>
  );
}
