import React from 'react';
import { createRoot } from 'react-dom/client'; // New API
import App from './App';
import { particlesConfig } from './particles-config';
import './styles/index.css';

// Initialize particles.js
document.addEventListener('DOMContentLoaded', () => {
  if (window.particlesJS) {
    window.particlesJS('particles-js', particlesConfig);
  }
});

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);