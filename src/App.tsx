import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p className="text-3xl font-bold underline">Hello World!</p>
        <p>
          <button
            type="button"
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
