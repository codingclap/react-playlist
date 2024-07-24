import React from 'react';
import ReactDOM from 'react-dom';
import {Profile} from './components/Gallery.js';
import Gallery from './components/Gallery.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Gallery userName={'Parameter 1 using props'}/>
     <Gallery userName={'Parameter 2 using props'}/>
     <Profile url={'icons-1.png'}/>
  </React.StrictMode>
);
 
