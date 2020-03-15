import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import Toolbar from '../src/components/Toolbar/Toolbar';
import HomePage from './components/Homepage/Homepage';
import './App.css';
import { IoIosAirplane } from "react-icons/io";
function App() {

  return (
    <BrowserRouter>
    <Toolbar/>
   
    <div>
      <Route path="/" exact component={HomePage} />
    </div>

    
    </BrowserRouter>
  );
}

export default App;
