import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HomePage />
<div className="text-3xl font-bold text-blue-600 mt-8">Hello Tailwind!</div>
 </div>
  );
}  
function Button({ children, onClick, type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {children}
    </button>
  );
}