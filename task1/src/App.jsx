import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoggedInPage from './pages/LoggedInPage/LoggedInPage';
import SignUpModal from './components/SignUpModal/SignUpModal';
import 'bootstrap/dist/css/bootstrap.min.css';

import NotLoggedInPage from './pages/NotLoggedInPage/NotLoggedInPage';

function App() {


  return (
    <Router>  
       <div className="app">
      <Routes>
        <Route
        path='/'
        element={
          <NotLoggedInPage/>
        }
        />
        
        <Route path='/logged-in' element={<LoggedInPage/>} />
     
     
     
     
     

   </Routes>
   </div>
    </Router>
    
  );
}

export default App;
