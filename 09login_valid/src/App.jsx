import React from "react";
 
import Home from './componenets/Home';
import Calculator from "./componenets/Calculator";
import Nav from './componenets/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  
  return (
    <BrowserRouter>

      <Auth0Provider
        domain="dev-7y5z8xqvmyizcx85.us.auth0.com"
        clientId="SSi3cbTZAH6gx3UR2wnkrKnuyYTuhTUf"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} /> 
        </Routes>


      </Auth0Provider>

    </BrowserRouter>
  );

}

export default App;