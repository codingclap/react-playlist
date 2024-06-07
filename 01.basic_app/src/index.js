import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App Records={{ color:'red', heading:"first" }}/>
    <App Records={{ color:'green', heading:"Second" }}/>
    <App Records={{ color:'blue', heading:"Third" }}/>
  </React.StrictMode>
);
 
