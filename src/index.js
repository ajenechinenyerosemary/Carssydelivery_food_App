import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './components/Context/StoreContext';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the root
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: Measure performance in your app
reportWebVitals();
