import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './App';

const rootElement = document.getElementById('root');

// Wrap the App component inside createRoot
ReactDOM.createRoot(rootElement).render(<App />);

