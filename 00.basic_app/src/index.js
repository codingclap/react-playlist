import React from 'react';
import ReactDOM from 'react-dom';
import {Profile} from './components/Gallery.js';
import Gallery from './components/Gallery.js';
import team1 from './images/icons-1.png'; 
import team2 from './images/icons-2.png'; 
import team3 from './images/icons-3.png'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
     <Gallery name={"Amit kumar"}/>
     <Profile firstImage={team1}/>
     <Profile firstImage={team2}/>
     <Profile firstImage={team3}/>
  </React.StrictMode>
);
 
