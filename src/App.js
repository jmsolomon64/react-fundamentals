import React from 'react';
import'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from './Sidebar';

import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
