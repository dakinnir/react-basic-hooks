import React from 'react';
import { createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = createRoot(document.getElementById('root'));

root.render(
  // enforces that will don't use deprecated functions or functions that will be deprecated 
  // double render the app to catch weird behaviors that might occurs from the useEffects
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
