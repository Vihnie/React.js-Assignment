import React from 'react';
import './index.css'; // Importing the main CSS file
import { FaRegImage } from 'react-icons/fa';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App p-8 text-center">
      <h1 className="text-3xl font-bold underline mb-4">Hello React!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a simple React app.</p>

      <FaRegImage size={40} style={{ marginBottom: '16px' }} />

      <div className="card mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-2">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs mb-4">
        Click on the React logos to learn more
      </p>

      <h1 className="text-2xl font-semibold">Vinich did this</h1>
    </div>
  );
}


vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
