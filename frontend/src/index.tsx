import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Find the root element in the HTML
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with id 'root' not found in index.html");
}

// Render the app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Ensure the file is treated as a module
export {};