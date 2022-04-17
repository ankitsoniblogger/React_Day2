import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Routes, Route, Router } from 'react-router-dom';

import {Home, Hello} from './Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/hello" element={<Hello/>} />
      </Routes>

    </Router>
  
  </React.StrictMode>
);


